import React from 'react'
import './Header.css'


import prand from '../../assets/images/Logo_V2.gif'
import Tringle from '../../assets/images/Triangle.webp'
import meandb from '../../assets/images/1669731730U57br2d72H.webp'
import toFace from '../../assets/images/two_face_icon.webp'
import bond1 from '../../assets/images/bond-1.webp'
import bond2 from '../../assets/images/bond-2.webp'
import closeIcon from '../../assets/images/close_icon.webp'
import bell from '../../assets/images/nicubunu_Bell.png'
import 'animate.css';
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='Header'>
      <div className='main_parent d-flex justify-content-enter'>
        <div className='d-flex'>
          <div className='row '>

            <div className='welcome_photo col-md-4 '>
              <img src={meandb} alt={"Prand"} className="w-100 " />
            </div>
            <div className='parent_prand col-md-8 mt-5 '>
              <img src={toFace} alt={"toFace"} className="toFace" />
              <img src={Tringle} alt={"panner"} className="Tringle" />
              <img src={prand} alt={"Prand"} className="w-25 prand" />
              <img src={closeIcon} alt={"closeIcon"} className="closeIcon" />
            </div>
          </div>
        </div>
      </div>
      <div className='lets'>
        <img src={bond1} alt={"bond1"} className="bond1" /><br />
        <img src={bond2} alt={"bond2"} className="bond2" />
      </div>
      <Link to='/applyForm'>
        <div className='hiring mt-4 mb-4 d-flex'>
          <div className='click'>Apply now</div>
        </div>
      </Link>

    </div >
  )
}

export default Header
