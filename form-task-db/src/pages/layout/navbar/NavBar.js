import React from 'react'
import './NavBar.css'

import Logo from '../../../assets/images/logo.webp'
import { Link } from 'react-router-dom'



const NavBar = ({ applications }) => {
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
                                <Link className="nav-link active position-relative" aria-current="page" to="/applications">
                                    APPLICATIONS
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {applications.length > 0 ? applications.length - 1 : applications.length = 0}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </Link>

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
