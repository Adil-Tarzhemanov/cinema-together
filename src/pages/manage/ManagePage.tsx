'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { removeFromStorage } from '@/shared/api/auth-token.service'
import { PUBLIC_URL } from '@/shared/config/url.config'
import { useProfile } from '@/shared/hooks/useProfile'

import styles from './styles.module.scss'

export const ManagePage: FC = () => {
  const { user } = useProfile()

  const { push } = useRouter()

  if (!user) return null

  const logout = () => {
    removeFromStorage()
    push(PUBLIC_URL.auth())
  }
  return (
    <div className={styles.container}>
      manage {user.name} <button onClick={() => logout()}>ВЫЙТИ</button>
    </div>
  )
}
