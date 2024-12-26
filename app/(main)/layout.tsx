import { FC, PropsWithChildren } from 'react'

import { MainLayout } from '@/shared/ui/layouts/mainLayout/MainLayout'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <MainLayout>{children}</MainLayout>
}

export default Layout
