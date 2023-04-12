import React from 'react'
import RegisterLogo from './RegisterLogo'
import RegisterForm from './RegisterForm'

const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 space-y-8 min-h-screen bg-background">
      <h1 className="text-4xl font-bold text-white">Foodpool</h1>
      <div className="flex overflow-hidden flex-row w-full max-w-5xl rounded-2xl shadow">
        <RegisterLogo />
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register
