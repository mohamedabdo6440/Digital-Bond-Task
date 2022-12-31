import React from 'react'
import Applications from '../pages/applications/Applications'

//Manage Data state with Out Controller
const AppManage = ({ applications, setApplications }) => {



    //filter Empty default object 
    const FilterData = applications.filter((emp) => {
        return emp.email;
    })

    return (
        <div>
            <div className='container text-center my-4'>
                <div className='bg-dark text-light w-100 p-2 rounded-pill'><h1>Applications</h1></div>
            </div>
            <div className="container mt-5 mb-3">
                <div className="row">
                    {
                        FilterData.length > 0 ? (


                            FilterData.map((emp) => {

                                return (
                                    <Applications {...emp} id={Math.random()} />
                                )
                            })
                        ) : (<h1 className='text-center  text-bg-warning my-5 p-5 rounded-pill'>Not Exist Application </h1>)


                    }

                </div>
            </div>
        </div>
    )
}

export default AppManage
