import React from 'react'
import ReactDOM from 'react-dom/client'
import { CookiesProvider } from 'react-cookie'
import { AuthProvider } from 'react-auth-kit'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <AuthProvider
          authType="cookie"
          authName="_auth"
          cookieDomain={window.location.hostname}
          cookieSecure={false}
        >
          <App />
        </AuthProvider>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
)
