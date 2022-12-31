import React from 'react'
import NavBar from './navbar/NavBar'
import Footer from './footer/Footer'

const Layout = ({ children, applications }) => {
    return (

        <>

            <NavBar applications={applications} />

            <div className='text-center'>

                {children}


            </div>

            <Footer />

        </>
    )
}

export default Layout
