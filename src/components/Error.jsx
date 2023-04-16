import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Error = () => {
  const navigate = useNavigate()
  const { isAuthenticated, isLoading, isLogged } = useAuth()
  return (
    <div className="flex flex-col justify-center items-center px-4 space-y-8 min-h-screen bg-black">
      <div id="app">
        <div>403</div>
        <div className="txt">
          Forbidden<span className="blink">_</span>
        </div>
        {isAuthenticated && !isLoading && isLogged ? (
          <button
            className="btn btn-outline btn-primary mt-5"
            onClick={() => {
              navigate(-1, { replace: true })
            }}
          >
            Back
          </button>
        ) : (
          <button
            className="btn btn-outline btn-primary mt-5"
            onClick={() => {
              navigate('/login', { replace: true })
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  )
}

export default Error
