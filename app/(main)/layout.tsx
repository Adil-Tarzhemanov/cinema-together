import type { ReactNode } from 'react'

import { MainLayout } from '@/shared/ui/layouts/mainLayout/MainLayout'

const Layout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>
}

export default Layout
