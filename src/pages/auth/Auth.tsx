import type { Metadata } from 'next'
import Image from 'next/image'

import styles from './styles.module.scss'
import { authWidgetsUi } from '@/widgets'

const { AuthFormWidget } = authWidgetsUi

export const metadata: Metadata = {
  title: 'Авторизация'
}

export function AuthPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <AuthFormWidget />
      </div>
      <div className={styles.right}>
        <Image
          src='/assets/images/auth.svg'
          height={150}
          width={150}
          alt='Авторизация'
        />
      </div>
    </div>
  )
}
