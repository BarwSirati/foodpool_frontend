import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import Loading from './Loading'

const ProtectRoute = ({ children }) => {
  const { isAuthenticated, isLogged, isLoading } = useAuth()
  if (isLoading) {
    return <Loading />
  }

  if (!isAuthenticated && !isLogged) {
    return <Navigate to={'/login'} replace />
  }
  return <>{children}</>
}

export default ProtectRoute
