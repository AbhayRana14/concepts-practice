import React from 'react'
import './flexboxCSS.css'

const FlexboxCSS = () => {
    return (
        <div className="grand-parent">
            <h1>Services</h1>
            <div className="parent">
                <div className="child">
                    <p>Abhay</p>
                </div>
                <div className="child">
                    <p>Rana</p>
                </div>
                <div className="child">
                    <p>React Developer</p>
                </div>
            </div>
        </div>
    )
}

export default FlexboxCSS

