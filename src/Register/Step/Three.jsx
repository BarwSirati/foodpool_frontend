import React from 'react'
import Input from '../../components/Input'
const Three = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <Input
        id={'tel'}
        label={'Tel'}
        placeholder={'Tel'}
        register={register('tel', { required: true })}
        error={errors.tel?.message}
      />
      <Input
        id={'line'}
        label={'Line'}
        placeholder={'Line'}
        register={register('line', { required: true })}
        error={errors.line?.message}
      />
    </div>
  )
}

export default Three
