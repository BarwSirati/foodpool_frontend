import React from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectRoute = ({ children }) => {
  const { isAuthenticated, isLogged, isLoading } = useAuth()
  if (isLoading) {
    return <div>Loading</div>
  }

  if (!isAuthenticated && !isLogged) {
    return <Navigate to={'/login'} replace />
  }
  return <>{children}</>
}

export default ProtectRoute
