import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { registerUser } from '../services/user.service'
import One from './Step/One'
import Two from './Step/Two'
import Three from './Step/Three'

const schema = yup.object().shape({
  name: yup.string().required(),
  lastname: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required(),
  tel: yup.string().min(10).max(10).required(),
  line: yup.string().required(),
})
const RegisterForm = () => {
  const [page, setPage] = useState(0)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data) => {
    await registerUser({ ...data })
  }
  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <One register={register} errors={errors} />
      case 1:
        return <Two register={register} errors={errors} />
      case 2:
        return <Three register={register} errors={errors} />
      default:
        return <One register={register} errors={errors} />
    }
  }
  return (
    <div className="flex flex-col flex-auto p-8 bg-white divide-y divide-line">
      <div className="pb-4 text-3xl font-semibold text-black text-center">
        Sign Up
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-4 space-y-4 text-lg font-medium"
      >
        <div className="text-center">
          <ul className="steps text-white">
            <li className="step step-error"></li>
            <li className={`step ${page > 0 && 'step-error'}`}></li>
            <li className={`step ${page > 1 && 'step-error'}`}></li>
          </ul>
        </div>
        {conditionalComponent()}
        <div className="flex w-full">
          <div className="flex-auto">
            {page > 0 && (
              <button
                type="button"
                className="p-2 text-white bg-button rounded-md hover:border-transparent"
                onClick={() => page > 0 && setPage(page - 1)}
              >
                Back
              </button>
            )}
          </div>
          <div className="flex-auto text-right">
            {page === 2 ? (
              <input
                type="submit"
                className="p-2 text-white bg-button rounded-md hover:border-transparent cursor-pointer"
              />
            ) : (
              <button
                type="button"
                className="p-2 text-white bg-button rounded-md hover:border-transparent"
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className="text-base font-medium text-center">
          Already have an account ?
          <Link to="/login" className="ml-1 text-orange-600 font-semibold">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
