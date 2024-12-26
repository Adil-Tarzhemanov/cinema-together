import { FC } from 'react'

import styles from './styles.module.scss'

export const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}></div>
    </div>
  )
}
