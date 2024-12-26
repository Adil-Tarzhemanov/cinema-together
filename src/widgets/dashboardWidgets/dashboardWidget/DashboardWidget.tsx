'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { removeFromStorage } from '@/shared/api/auth-token.service'
import { PUBLIC_URL } from '@/shared/config/url.config'
import { useProfile } from '@/shared/hooks/useProfile'
import { Button } from '@/shared/ui/components/form-elements/button/Button'
import { Heading } from '@/shared/ui/components/heading/Heading'

import styles from './styles.module.scss'

export const DashboardWidget: FC = () => {
  const { user } = useProfile()

  const { push } = useRouter()

  if (!user) return null

  const logout = () => {
    removeFromStorage()
    push(PUBLIC_URL.auth())
  }

  return (
    <div className='px-6'>
      <div className={styles.wrapper}>
        <Heading className={styles.heading}>Привет, {user.name}</Heading>
        <div className={styles.avatar}>
          <Image
            src={user.avatarPath}
            alt={user.name}
            width={180}
            height={180}
            className='rounded-md'
          />
        </div>
        <Button
          className={styles.button}
          variant='outline'
          onClick={() => logout()}
        >
          Выйти
        </Button>
      </div>
    </div>
  )
}
