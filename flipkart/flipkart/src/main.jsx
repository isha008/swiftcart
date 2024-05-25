import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserContextProvider from './pages/User/userSignup/userContext/userContextProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <UserContextProvider>
    <App />
    </UserContextProvider>
  </React.StrictMode>,
)
