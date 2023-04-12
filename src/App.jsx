import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Home'
import Login from './Login'
import Register from './Register'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
