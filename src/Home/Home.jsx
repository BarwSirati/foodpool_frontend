import React from 'react'
import { useAuth } from '../Contexts/AuthContext'

const Home = () => {
  const { user, logout } = useAuth()
  return (
    <div className="bg-green-500 w-full min-h-screen">
      <div>
        <button
          className="btn btn-error"
          onClick={() => {
            logout()
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Home
