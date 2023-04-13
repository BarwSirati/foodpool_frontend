import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center items-center px-4 space-y-8 min-h-screen bg-black">
      <div id="app">
        <div>403</div>
        <div className="txt">
          Forbidden<span className="blink">_</span>
        </div>
        <button
          className="btn btn-outline btn-primary mt-5"
          onClick={() => {
            navigate('/login', { replace: true })
          }}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Error
