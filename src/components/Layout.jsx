import React from 'react'
import { Outlet } from 'react-router-dom'
const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full">{children}</div>
      <Outlet />
    </>
  )
}

export default Layout
