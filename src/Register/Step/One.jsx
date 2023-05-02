import React from 'react'
import Input from '../../components/Input'

const One = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <Input
        id={'name'}
        label={'Name'}
        placeholder={'Name'}
        register={register('name', { required: true })}
        error={errors.name?.message}
      />
      <Input
        id={'lastname'}
        label={'Lastname'}
        placeholder={'Lastname'}
        register={register('lastname', { required: true })}
        error={errors.lastname?.message}
      />
    </div>
  )
}

export default One
