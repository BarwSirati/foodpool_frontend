import axios from 'axios'

export const login = async (username, password) => {
  try {
    const res = await axios.post('/api/auth/login', { username, password })
    const token = res.data.token
    return token
  } catch (err) {}
}

export const logout = async () => {
  document.cookie.split(';').forEach((c) => {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/')
  })
  document.location = '/login'
}

export const getProfile = async () => {
  const token = document.cookie.split('=')[1]
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    try {
      const res = await axios.get(`/api/user/current`)
      return res.data
    } catch (err) {
      document.cookie.split(';').forEach((c) => {
        document.cookie = c
          .replace(/^ +/, '')
          .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/')
      })
    }
  }
}
