import React from 'react'
import './Form.css'
import prand from '../../assets/images/Logo_V2.gif'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const navigate = useNavigate()


    //handle Form data
    const hndleForm = () => {


        setTimeout(() => {
            navigate("/success")
        }, 1000)
    }








    return (
        <section className="vh-100" style={{ backgroundColor: "#eee;" }}>
            <div className=" h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px;" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Fill fields</p>

                                        <form className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control" />
                                                    <label className="form-label" for="form3Example1c">Your Name</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i class="fa-solid fa-briefcase fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control" />
                                                    <label className="form-label" for="form3Example1c">Position</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i class="fa-solid fa-business-time fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control" />
                                                    <label className="form-label" for="form3Example1c">avaliability date</label>
                                                </div>
                                            </div>


                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i class="fa-solid fa-money-bill-transfer fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control" />
                                                    <label className="form-label" for="form3Example1c">Epected Salary</label>
                                                </div>
                                            </div>


                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i class="fa-solid fa-calendar-days fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="date" id="form3Example1c" className="form-control" />
                                                    <label className="form-label" for="form3Example1c">Date Of Birth</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i class="fa-solid fa-location-dot fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control" />
                                                    <label className="form-label" for="form3Example1c">Address</label>
                                                </div>
                                            </div>


                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example3c" className="form-control" />
                                                    <label className="form-label" for="form3Example3c">Your Email</label>
                                                </div>
                                            </div>



                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i class="fa-solid fa-person fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example3c" className="form-control" />
                                                    <label className="form-label" for="form3Example3c">Marital Status</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i class="fa-solid fa-phone fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="Phone" id="form3Example4c" className="form-control" />
                                                    <label className="form-label" for="form3Example4c">Phone Number</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i class="fa-solid fa-file-pdf fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="file" id="form3Example4c" className="form-control" />
                                                    <label className="form-label" for="form3Example4c">Attach File Button</label>
                                                </div>
                                            </div>



                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="button" className="btn btn-success btn-lg" onClick={hndleForm}>Submit</button>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src={prand}
                                            className={"img-fluid"} alt={"Sample"} />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form
