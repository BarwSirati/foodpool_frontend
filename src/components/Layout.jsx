import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <div className="w-full">{children}</div>
      <Outlet />
    </>
  )
}

export default Layout
