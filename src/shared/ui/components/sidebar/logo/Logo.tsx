import cn from 'clsx'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { PUBLIC_URL } from '@/shared/config/url.config'

import styles from './Logo.module.scss'

const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})

export const Logo: FC = () => {
  return (
    <Link href={PUBLIC_URL.home()} className='items-center gap-x-2 flex mb-8'>
      <Image
        src='/assets/images/logo.svg'
        alt='CinemaHub'
        width={50}
        height={50}
      />
      <div className={cn('font-semibold text-2xl text-white', font.className)}>
        Cinema<span className='text-primary'>Hub</span>
      </div>
    </Link>
  )
}
