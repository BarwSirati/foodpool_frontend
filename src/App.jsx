import React from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import ProtectRoute from './components/ProtectRoute'
import Error from './components/Error'

axios.defaults.baseURL = import.meta.env.VITE_APP_API
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  )
}

export default App
