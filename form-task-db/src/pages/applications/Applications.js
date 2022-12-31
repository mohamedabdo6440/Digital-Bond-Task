import React from 'react'
import './Applications.css'

const Applications = ({ id, fullName, position, dateAvail, Salary, birth, Address, Phone, email, Status, handleDelete }) => {



    return (




        <div className="col-md-4" key={id}>
            <div className="card-app p-3 mb-2">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div className="icon"> <i className="fa fa-user"></i> </div>
                        <div className="ms-2 c-details">
                            <h6 className="mb-0">{fullName}</h6> <span>Birth Date / {birth}</span>
                        </div>
                    </div>
                    <div className="badge"> <span>D-B</span> </div>
                </div>
                <div className="mt-5">
                    <span className="heading text-black fw-bold">Position : <h6 className='info'>{position}</h6></span>
                    <span className="heading text-black fw-bold">avaliability date : <h6 className='info'>{dateAvail}</h6></span>
                    <span className="heading text-black fw-bold">Epected Salary : <h6 className='info'>{Salary}</h6></span>
                    <span className="heading text-black fw-bold">Address : <h6 className='info'>{Address}</h6></span>
                    <span className="heading text-black fw-bold"> Phone Number : <h6 className='info'>{Phone}</h6></span>
                    <span className="heading text-black fw-bold">E-mail  : <h6 className='info'>{email}</h6></span>
                    <span className="heading text-black fw-bold">Marital Status: <h6 className='info'>{Status}</h6></span>

                    <div className="my-3">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar"></div>
                        </div>

                        <button className='btn btn-success w-100'>Contact <i className="fa fa-phone"></i></button>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Applications
