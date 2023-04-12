import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Input from '../components/Input'
import { Link } from 'react-router-dom'

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
})

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="flex flex-col flex-auto p-8 bg-white divide-y divide-line">
      <div className="pb-4 text-3xl font-semibold text-black text-center">
        Sign In
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-4 space-y-4 text-lg font-medium"
      >
        <Input
          id={'username'}
          label={'Username'}
          placeholder={'username'}
          error={errors.username?.message}
          register={register('username', { required: true })}
        />
        <Input
          id={'password'}
          label={'Password'}
          type="password"
          placeholder={'password'}
          error={errors.password?.message}
          register={register('password', { required: true })}
        />
        <button
          type="submit"
          className="p-3 w-full text-white bg-button rounded-md hover:border-transparent"
        >
          Login
        </button>
        <div className="text-base font-medium text-center">
          Don't have an account yet ?
          <Link href="register" className="ml-1 text-orange-600 font-semibold">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
