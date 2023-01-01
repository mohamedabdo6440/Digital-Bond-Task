import React from 'react'
import NavBar from './navbar/NavBar'
import Footer from './footer/Footer'

const Layout = ({ children, applications }) => {
    return (

        <>

            <NavBar applications={applications} />

            <main className='text-center'>

                {children}


            </main>

            <Footer />

        </>
    )
}

export default Layout
