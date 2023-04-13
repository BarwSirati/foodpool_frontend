import React from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import ProtectRoute from './Components/ProtectRoute'
import Error from './Components/Error'

axios.defaults.baseURL = import.meta.env.VITE_APP_API
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
