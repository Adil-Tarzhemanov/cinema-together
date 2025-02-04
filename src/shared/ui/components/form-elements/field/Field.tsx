import { forwardRef } from 'react'

import { IField } from '@/shared/ui/components/form-elements/form-interface'

import styles from './styles.module.scss'

export const Field = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, error, style, ...rest }, ref) => {
    return (
      <div className={styles.field} style={style}>
        <label>
          <span>{placeholder}</span>
          <input ref={ref} placeholder={placeholder} {...rest} />
        </label>
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    )
  }
)
Field.displayName = 'Field'
