import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const Index = () => {
    const location = useLocation();
    const history = useHistory();
    return (
        <div>
            <h1>I am {location.pathname.replace("/","")}</h1>
            <button onClick={()=>history.push("/home")}>HOME</button>
        </div>
    )
}

export default Index
