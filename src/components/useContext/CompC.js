import React, { useContext } from 'react'
import {BioData} from "./CompA";

const CompC = () => {
    const data = useContext(BioData);
    return (
        <div>
            <h1>I am using " { data[0] }"</h1>
        </div>
    )
}

export default CompC
