import React from 'react'
import Logo from '/logo.svg'

const LoginLogo = () => {
  return (
    <div className="hidden flex-col w-1/2 justify-center items-center p-8 space-y-10 bg-logo md:flex">
      <img src={Logo} alt="loginLogo" width={2} height={2} className="w-96" />
    </div>
  )
}

export default LoginLogo
