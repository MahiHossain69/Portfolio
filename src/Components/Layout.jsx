import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Scroll from './Scroll/Scroll'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Scroll/>
    </div>
  )
}

export default Layout
