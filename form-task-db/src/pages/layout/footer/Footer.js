import React from 'react'
import './Footer.css'

import icon from "../../../assets/images/mobile_icon.png"
import icon2 from "../../../assets/images/envelope_icon.png"
import icon3 from "../../../assets/images/pin_map_icon.png"
import Logo from '../../../assets/images/logo_footer_black.webp'
import icon4 from '../../../assets/images/whole_curcle_icon.webp'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <h3>THE BONDERS ARE</h3>
                        <p>A bonded family that mix and match creativity and commitment to help brands go beyond the limit.</p>
                    </div>
                    <div className='col-md-3 conacts'>

                        <h3>GET IN TOUCH</h3>
                        <div><img src={icon} alt={"phone"} className="mb-2" /> +2-01021551322</div>
                        <div><img src={icon2} alt={"mail"} className="mb-2" />{" "}
                            Bonder@digitalbondmena.com</div>
                        <div><img src={icon3} alt={"map"} className=" mb-2" /> 11 Dr El-Sebaey , Giza Governorate</div>

                    </div>
                    <div className='col-md-3'>
                        <h3>EXPLORE MORE</h3>

                        <h5>Home</h5>
                        <h5>About us</h5>
                        <h5>careers</h5>
                        <h5>Say hello</h5>
                    </div>
                    <div className='col-md-3'>
                        <h3>KEYWORDS</h3>
                        <div className='d-flex flex-wrap'>
                            <span className='words'>Go Back Home</span>
                            <span className='words'>Want To Join Us</span>
                            <span className='words'>Lets Talk</span>
                            <span className='words'>Mobile Apps</span>
                            <span className='words'>SMS Campaigns</span>
                            <span className='words'>Want To Know More About Us</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='icon mt-3 '>
                <img src={icon4} alt={""} />
            </div>
            <div className='text-center mt-3'>
                <p> Copyright © 2022 <img src={Logo} alt={"Logo"} className="Logo_Black" /> All rights reserved</p>
            </div>

        </div>
    )
}

export default Footer
