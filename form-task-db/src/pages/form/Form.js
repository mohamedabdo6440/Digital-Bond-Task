import React from 'react'
import './Form.css'
import prand from '../../assets/images/Logo_V2.gif'
import FormValidation from '../../components/FormValidation'
import { Link } from 'react-router-dom'


const Form = ({ setApplications }) => {

    return (


        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black">
                    <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Fill fields</p>
                                <FormValidation setApplications={setApplications} />

                            </div>
                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                <Link to='/'>
                                    <img src={prand}
                                        className={"img-fluid"} alt={"Sample"} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Form
