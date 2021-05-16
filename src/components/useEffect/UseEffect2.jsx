import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    const [widthCount,setwidthCount] = useState(window.screen.width);
    const actualWidth =()=>{
        setwidthCount(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener("resize",actualWidth);
        return () =>{
            window.removeEventListener("resize",actualWidth);
        }
    });
    return (

        <div>
            <h1>lets use cleanup function</h1>
            <h1>{widthCount}</h1>
        </div>
    )
}

export default UseEffect2
