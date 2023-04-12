import React from 'react'
import Input from '../../components/Input'

const Two = ({ register, errors }) => {
  return (
    <div>
      <Input
        id={'username'}
        label={'Username'}
        placeholder={'Username'}
        register={register('username', { required: true })}
        error={errors.username?.message}
      />
      <Input
        id={'password'}
        label={'Password'}
        placeholder={'Password'}
        type="password"
        register={register('password', { required: true })}
        error={errors.password?.message}
      />
    </div>
  )
}

export default Two
