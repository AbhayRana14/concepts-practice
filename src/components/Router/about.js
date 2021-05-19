import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const About = () => {
    const location=useLocation();
    const history=useHistory();
    return (
        <div>
            <h1>I am {location.pathname.replace("/","")}</h1>
            <button onClick={history.goBack}>Go Back</button>
        </div>
    )
}

export default About
