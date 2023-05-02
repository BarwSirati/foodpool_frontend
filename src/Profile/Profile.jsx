import React, { useState } from 'react'
import Container from '../components/Container'
import { useAuth } from '../contexts/AuthContext'
import ProfileLogo from '/profile2.svg'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '../components/Input'
import * as yup from 'yup'
import { updateProfile } from '../services/user.service'

const schema = yup.object().shape({
  name: yup.string().required(),
  lastname: yup.string().required(),
  username: yup.string().required(),
  password: yup.string(),
  tel: yup.string().min(10).max(10).required(),
  line: yup.string().required(),
})
const Profile = () => {
  const { user } = useAuth()

  const [isEdit, setIsEdit] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })
  const onSubmit = async (data) => {
    console.log(user.id)
    await updateProfile(user.id, { ...data })
  }
  return (
    <Container>
      <h2 className="text-2xl font-semibold mb-10">Profile</h2>
      <div className="pt-5">
        <div className="text-center space-y-5">
          <img src={ProfileLogo} className="w-36 mx-auto" />
          <h1 className="text-2xl font-semibold">
            {user.name + ' ' + user.lastname}
          </h1>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto">
            <div className="profileBox md:space-x-10">
              <Input
                id={'firstname'}
                label={'First Name'}
                placeholder={'First Name'}
                value={user.name}
                register={register('name', { required: true })}
                error={errors.name?.message}
                readOnly={isEdit}
              />
              <Input
                id={'lastname'}
                label={'Last Name'}
                value={user.lastname}
                placeholder={'Last Name'}
                register={register('lastname', { required: true })}
                error={errors.lastname?.message}
                readOnly={isEdit}
              />
            </div>
            <div className="profileBox md:space-x-10">
              <Input
                id={'username'}
                label={'Username'}
                placeholder={'Username'}
                value={user.username}
                register={register('username', { required: true })}
                error={errors.username?.message}
                readOnly={isEdit}
              />
              <Input
                id={'password'}
                label={'Password'}
                type="password"
                placeholder={'Password'}
                register={register('password', { required: true })}
                error={errors.password?.message}
                readOnly={isEdit}
              />
            </div>
            <div className="profileBox md:space-x-10">
              <Input
                id={'tel'}
                label={'Tel'}
                placeholder={'Tel'}
                register={register('tel', { required: true })}
                error={errors.tel?.message}
                value={user.tel}
                readOnly={isEdit}
              />
              <Input
                id={'line'}
                label={'Line'}
                value={user.line}
                placeholder={'Line'}
                register={register('line', { required: true })}
                error={errors.line?.message}
                readOnly={isEdit}
              />
            </div>
            <div className="profileBox text-right space-x-3">
              {!isEdit ? (
                <>
                  <input
                    type="submit"
                    className="btn btn-success ml-auto"
                    value={'Save'}
                  />
                  <button
                    className="btn btn-error ml-auto"
                    onClick={() => {
                      setIsEdit(!isEdit)
                    }}
                  >
                    Discard
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setIsEdit(!isEdit)
                  }}
                  className="btn btn-warning ml-auto"
                >
                  Change
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Profile
