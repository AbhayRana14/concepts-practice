import React,{ useEffect, useState } from 'react'
import "../../App.css";
const UseEffects1 = () => {
    const [count,setCount] =useState(-1);
    useEffect(() => {
        if(count >=1)
        {
            document.title = `Chats (${count})`;
        }
        else{
            document.title = `Chats`;
        }
        
    })

    return (
        <div>
            <h1>Lets start using use effects hooks</h1>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count+1)}>Increment</button>
        </div>
    )
}

export default UseEffects1
