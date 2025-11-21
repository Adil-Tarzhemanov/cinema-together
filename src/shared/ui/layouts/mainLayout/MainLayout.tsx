'use client'

import type { PropsWithChildren, ReactElement } from 'react'

import { componentsSharedUi } from '@/shared/ui'

import styles from './styles.module.scss'

const { Header, Sidebar } = componentsSharedUi

export const MainLayout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <div className={styles.layout}>
      <div className='flex-1'>
        <Header />
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  )
}
