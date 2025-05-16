import Navbar from '@/component/Navbar'
import SubNavbar from '@/component/SubNavbar'
import React from 'react'
import LoginUi from './components/LoginUi'

const Login = () => {
  return (
    <div>
      <Navbar/>
      <SubNavbar/>
      <LoginUi/>
    </div>
  )
}

export default Login