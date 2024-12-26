import cn from 'clsx'
import { FC } from 'react'

import { IButton } from '@/shared/ui/components/form-elements/form-interface'

import styles from './styles.module.scss'

export const Button: FC<IButton> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  ...rest
}) => {
  return (
    <button
      className={cn(
        styles.button,
        className,
        size === 'md' && 'rounded-lg px-4',
        size === 'sm' && 'text-sm rounded-md',
        {
          [styles.default]: variant === 'default',
          [styles.outline]: variant === 'outline'
        }
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
