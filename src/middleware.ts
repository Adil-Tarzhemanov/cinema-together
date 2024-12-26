import { type NextRequest, NextResponse } from 'next/server'

import { EnumTokens } from '@/shared/api/auth-token.service'
import { userService } from '@/shared/api/user.service'
import {
  ADMIN_URL,
  DASHBOARD_URL,
  PUBLIC_URL
} from '@/shared/config/url.config'
import { UserRole } from '@/shared/types/user.types'

export async function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get(
    EnumTokens.REFRESH_TOKEN as any
  )?.value
  const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN as any)?.value

  const isAuthPage = request.url.includes(PUBLIC_URL.auth())
  const isAdminPage = request.url.includes(ADMIN_URL.root())

  if (isAuthPage) {
    if (refreshToken && accessToken) {
      return NextResponse.redirect(new URL(DASHBOARD_URL.root(), request.url))
    }

    return NextResponse.next()
  }

  if (refreshToken === undefined) {
    return NextResponse.rewrite(
      new URL(isAdminPage ? '/404' : PUBLIC_URL.auth(), request.url)
    )
  }

  try {
    const profile = await userService.getProfileMiddleware(refreshToken)

    if (profile.role === UserRole.ADMIN) {
      return NextResponse.next()
    }

    if (isAdminPage) {
      return NextResponse.rewrite(new URL('/404', request.url))
    }

    return NextResponse.next()
  } catch (error) {
    request.cookies.delete(EnumTokens.REFRESH_TOKEN)
    return NextResponse.redirect(new URL(PUBLIC_URL.auth(), request.url))
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/manage/:path*', '/auth']
}
