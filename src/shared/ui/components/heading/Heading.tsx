import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

interface IHeading {
  className?: string
}

export const Heading: FC<PropsWithChildren<IHeading>> = ({
  children,
  className
}) => {
  return <h1 className={cn('text-2xl font-semibold', className)}>{children}</h1>
}
