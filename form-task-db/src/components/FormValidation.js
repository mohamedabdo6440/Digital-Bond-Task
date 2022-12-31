import React, { useRef } from 'react'


import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import PreviewImage from './PreviewImage';
import { useNavigate } from 'react-router-dom';



const SUPPORTED_FORMATS = ["image/jpg", "image/png", "image/jpeg"]

//fields Rool
const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    position: Yup.string().required('Required'),
    dateAvail: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    Address: Yup.string().required('Required'),
    Status: Yup.string().required('Required'),
    Phone: Yup.number().required('Required'),

    Salary: Yup.string()

        .required('Required'),
    birth: Yup.string().required('Required'),

    email: Yup.string().email('Invalid email').required('Required'),

    attach: Yup.mixed()
        .nullable()
        .notRequired()
        .test("FILE_SIZE", "Uploaded file is too big.",
            value => !value || (value && value.size <= 1024 * 1024))
        .test("FILE_FORMAT", "Uploaded file has unsupported format.",
            value => !value || (value && SUPPORTED_FORMATS.includes(value.type)))
});
const FormValidation = ({ setApplications }) => {

    const fileRef = useRef(null)
    const navigate = useNavigate()

    const addNewRecord = (Newdata) => {
        setApplications(prevState => ([...prevState, Newdata]))
    }

    return (
        <div>

            <Formik
                initialValues={{
                    fullName: '',
                    position: '',
                    dateAvail: '',
                    email: '',
                    Status: '',
                    Phone: '',
                    Salary: '',
                    birth: '',
                    Address: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    addNewRecord(values);
                    setTimeout(() => {
                        navigate("/success")
                    }, 1000);
                }}
            >
                {({ errors, touched, setFieldValue, values }) => (
                    <Form>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <h5>Full Name</h5>
                                <Field name="fullName" className="form-control" />
                                {errors.fullName && touched.fullName ? (
                                    <div className='text-danger'>{errors.fullName}</div>
                                ) : null}
                            </div>
                        </div>


                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fa-solid fa-briefcase fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <h5>Position</h5>
                                <Field name="position" className="form-control" />
                                {errors.position && touched.position ? (
                                    <div className='text-danger'>{errors.position}</div>
                                ) : null}
                            </div>
                        </div>


                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fa-solid fa-calendar-days fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <h5>Birth Date</h5>
                                <Field name="birth" type="date" className="form-control" />
                                {errors.birth && touched.birth ? (
                                    <div className='text-danger'>{errors.birth}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fa-solid fa-business-time fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <h5>Date Available</h5>
                                <Field name="dateAvail" className="form-control" />
                                {errors.dateAvail && touched.dateAvail ? (
                                    <div className='text-danger'>{errors.dateAvail}</div>
                                ) : null}
                            </div>
                        </div>


                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <h5>E-mail</h5>
                                <Field name="email" type="email" className="form-control" />
                                {errors.email && touched.email ? <div className='text-danger'>{errors.email}</div> : null}
                            </div>
                        </div>


                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fa-solid fa-money-bill-transfer fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <h5>Epected Salary </h5>
                                <Field name="Salary" className="form-control" />
                                {errors.Salary && touched.Salary ? (
                                    <div className='text-danger'>{errors.Salary}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fa-solid fa-location-dot fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <h5>Address  </h5>
                                <Field name="Address" className="form-control" />
                                {errors.Address && touched.Address ? (
                                    <div className='text-danger'>{errors.Address}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fa-solid fa-phone fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <h5>Phone  </h5>
                                <Field name="Phone" className="form-control" />
                                {errors.Phone && touched.Phone ? (
                                    <div className='text-danger'>{errors.Phone}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <h5>Marital Status </h5>
                                <Field name="Status" className="form-control" />
                                {errors.Status && touched.Status ? (
                                    <div className='text-danger'>{errors.Status}</div>
                                ) : null}
                            </div>
                        </div>




                        <div className="form-outline flex-fill mb-0">
                            <input
                                type="file"
                                name="attach"
                                id="form3Example1c"
                                className="form-control"
                                ref={fileRef}
                                hidden
                                onChange={(e) => setFieldValue("file", e.target.files[0])}
                            />
                            {values.attach ? <PreviewImage file={values.attach} /> : null}
                            <div>
                                {errors.attach && touched.attach ? (
                                    <div className='text-danger'>{errors.attach}</div>
                                ) : null}
                            </div>
                            <button type='button' className='btn btn-primary my-4' onClick={() => {
                                fileRef.current.click();
                            }}><i className="fa-solid fa-file-pdf fa-lg me-3 fa-fw"></i> Upload You Attach..</button>
                        </div>


                        <div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4 '>
                            <button
                                className="btn btn-success btn-lg"
                                type="submit">
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default FormValidation
