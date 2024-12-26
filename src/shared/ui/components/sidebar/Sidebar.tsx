import { FC } from 'react'

import { Logo } from '@/shared/ui/components/sidebar/logo/Logo'
import { MenuContainer } from '@/shared/ui/components/sidebar/navigation/MenuContainer'
import { Subscribe } from '@/shared/ui/components/sidebar/subsribe/Subscribe'

import styles from './styles.module.scss'

export const Sidebar: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Logo />
        <MenuContainer />
        <Subscribe />
      </div>
    </div>
  )
}
