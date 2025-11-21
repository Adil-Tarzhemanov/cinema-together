import { type NextRequest, NextResponse } from 'next/server'

import { EnumTokens } from '@/shared/api/auth-token.service'
import {
  ADMIN_URL,
  DASHBOARD_URL,
  PUBLIC_URL
} from '@/shared/config/url.config'
import { UserRole } from '@/shared/types/user.types'

const INTERNAL_API_URL =
  (process.env.INTERNAL_API_URL as string) ||
  (process.env.SERVER_URL as string)

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

  // нет токенов - всегда на /auth (для админки можно отдать 404)
  if (!refreshToken || !accessToken) {
    const response = NextResponse.redirect(
      new URL(isAdminPage ? '/404' : PUBLIC_URL.auth(), request.url)
    )
    response.cookies.delete(EnumTokens.ACCESS_TOKEN as any)
    response.cookies.delete(EnumTokens.REFRESH_TOKEN as any)
    return response
  }

  // обычные страницы, токены есть - впускаем без доп. проверок
  if (!isAdminPage) return NextResponse.next()

  // для /manage проверяем роль пользователя через API
  try {
    const res = await fetch(`${INTERNAL_API_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    if (!res.ok) throw new Error('Failed to load profile')

    const profile = (await res.json()) as { role: UserRole }

    if (profile.role !== UserRole.ADMIN) {
      return NextResponse.rewrite(new URL('/404', request.url))
    }

    return NextResponse.next()
  } catch (error) {
    const response = NextResponse.redirect(
      new URL(PUBLIC_URL.auth(), request.url)
    )
    response.cookies.delete(EnumTokens.ACCESS_TOKEN as any)
    response.cookies.delete(EnumTokens.REFRESH_TOKEN as any)
    return response
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/manage/:path*', '/auth']
}
