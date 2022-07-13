import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = ({children}) => {
    const location = useLocation()

  return (
    <div>
        {location.pathname === "/login" ? "" : <Navbar/>}
        {/* <Navbar/> */}
        {children}
    </div>
  )
}

export default Layout