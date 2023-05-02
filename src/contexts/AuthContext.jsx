import { createContext, useContext, useState, useEffect } from 'react'
import { getProfile, login, logout } from '../services/user.service'

const AuthContext = createContext({
  isAuthenticated: false,
  isLoading: false,
  user: null,
  login: async () => {},
  logout: async () => {},
  isLogged: false,
})

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getProfile()
        if (res) {
          setUser(res)
          setIsLogged(true)
          setIsLoading(false)
        } else {
          setUser(null)
          setIsLogged(false)
          setIsLoading(false)
        }
      } catch (err) {
        setIsLoading(false)
      }
    }
    fetch()
  }, [])
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        isLoading,
        isLogged,
        login,
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
