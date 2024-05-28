// import { Navbar } from '@material-tailwind/react'
// import React, { Children } from 'react'
import Footer from "../footer/Footer"
// import Navbar from "../navbar/Navbar";
import Navbar from "../Navbar";

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className="main-content min-h-screen">
            {children}
        </div>
        <Footer/>
      
    </div>
  )
}

export default Layout
