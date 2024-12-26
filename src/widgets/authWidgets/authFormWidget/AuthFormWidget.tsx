'use client'

import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAuthMutation } from '@/entities/user/api/queries/authQueries/useAuthMutation'

import { authFeatureUi } from '@/features/auth'

import { IAuthForm } from '@/shared/types/auth.types'
import { componentsSharedUi } from '@/shared/ui'

import styles from './styles.module.scss'

const { Button, Heading } = componentsSharedUi
const { AuthFields } = authFeatureUi

export const AuthFormWidget: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IAuthForm>({
    mode: 'onChange'
  })

  const [isLoginForm, setIsLoginForm] = useState(true)

  const { mutate } = useAuthMutation(isLoginForm, reset)

  const onSubmit: SubmitHandler<IAuthForm> = data => {
    mutate(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading className={styles.heading}>
        {isLoginForm ? 'Войти в аккаунт' : 'Регистрация'}
      </Heading>
      <AuthFields
        register={register}
        errors={errors}
        isLoginForm={isLoginForm}
      />
      <Button className={styles.button}>
        {isLoginForm ? 'Войти' : 'Создать аккаунт'}
      </Button>
      <div className={styles.toggle}>
        {isLoginForm ? 'Еще нет аккаунта? ' : 'Уже есть аккаунт? '}
        <button
          type='button'
          onClick={() => setIsLoginForm(!isLoginForm)}
          className='text-primary'
        >
          {isLoginForm ? 'Создать аккаунт' : 'Войти в аккаунт'}
        </button>
      </div>
    </form>
  )
}
