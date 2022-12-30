import React from 'react'
import './NavBar.css'

import Logo from '../../../assets/images/logo.webp'
import { Link } from 'react-router-dom'



const NavBar = () => {
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark NavImage">
                <div className="container p-1 ">
                    <a className="navbar-brand" href="/"><img src={Logo} alt="Logo" className='w-50' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">CAREERS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">SAY HELLO</a>
                            </li>

                        </ul>
                        <div className='d-flex justify-content-center'>
                            <a className="btn bg-light rounded-circle me-2" href="/"><i className="fa-brands fa-instagram"></i></a>
                            <a className="btn bg-light rounded-circle me-2" href="/"><i className="fa-brands fa-facebook-f"></i></a>
                            <a className="btn bg-light rounded-circle me-2" href="/"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a className="btn bg-light rounded-circle me-2" href="/"><i className="fa-brands fa-whatsapp"></i></a>
                            <a className="btn bg-light rounded-circle me-2" href="/"><i className="fa-brands fa-tiktok"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
