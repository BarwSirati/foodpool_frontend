import React from 'react'
import LoginLogo from './LoginLogo'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 space-y-8 min-h-screen bg-background">
      <h1 className="text-4xl font-bold text-white">Foodpool</h1>
      <div className="flex overflow-hidden flex-row w-full max-w-5xl rounded-2xl shadow">
        <LoginLogo />
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
