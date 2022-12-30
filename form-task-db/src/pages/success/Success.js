import React from 'react'
import './success.css'

const Success = () => {
    return (
        <div className="card_success mt-4 mb-4">
            <div style={{ borderRadius: "200px;", height: "200px;", width: "200px;", background: "#F8FAF5;", margin: "0 auto;" }}>
                <i className="checkmark">✓</i>
            </div>
            <h1 className='title'>Success</h1>
            <p className='text'>We received your hiring request;<br /> we'll be in touch shortly!</p>
        </div>
    )
}

export default Success
