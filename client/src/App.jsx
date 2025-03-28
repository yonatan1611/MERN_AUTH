import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ResetPassword from './pages/resetPassword'
import Login from './pages/login'
import EmailVerify from './pages/emailVerify'
import Home from './pages/home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/email-verify' element={<EmailVerify/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
      </Routes>
      </div>
  )
}

export default App