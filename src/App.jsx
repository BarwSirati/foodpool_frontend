import React from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Order from './Order'
import Post from './Post'
import ProtectRoute from './components/ProtectRoute'
import Error from './components/Error'
import { useAuth } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import Profile from './Profile'
import Footer from './components/Footer'
import OrderDetail from './Post/OrderDetail'

axios.defaults.baseURL = import.meta.env.VITE_APP_API
const App = () => {
  const { isAuthenticated, isLogged, isLoading, user } = useAuth()
  return (
    <Layout>
      {isAuthenticated && isLogged && !isLoading && (
        <Navbar point={user.point} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectRoute>
              <Profile />
            </ProtectRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/post"
          element={
            <ProtectRoute>
              <Post />
            </ProtectRoute>
          }
        />
        <Route
          path="/post/:postId"
          element={
            <ProtectRoute>
              <OrderDetail />
            </ProtectRoute>
          }
        />
        <Route
          path="/order"
          element={
            <ProtectRoute>
              <Order />
            </ProtectRoute>
          }
        />

        <Route path="*" element={<Error />} />
      </Routes>
      {isAuthenticated && isLogged && !isLoading && <Footer />}
    </Layout>
  )
}

export default App
