import React,{ useState } from 'react'
import "../../App.css"
const LoginForm = () => {
    const [inputEmail,setinputEmail] = useState("");
    const [inputPass,setinputPass] = useState("");
    const [allEntry,setallEntry] = useState([]);
     const submitForm =(e) =>{
        e.preventDefault();
        const newEntry = {
            id: new Date().getTime().toString,
            email : inputEmail,
            password : inputPass
        }
       setallEntry([...allEntry,newEntry]);
       setinputEmail("");
       setinputPass("");
    }
    return (
        <>
        <form action="" onSubmit={submitForm}>
        <div className="login-form-container">
                <h1>Login Form</h1>
                <input 
                className="inp"
                type="text"
                placeholder="Type your Email here"
                value={inputEmail}
                onChange={(e) => setinputEmail(e.target.value)}
                />

                <input 
                className="inp"
                type="password"
                placeholder="Type your Email here"
                value={inputPass}
                onChange={(e) => setinputPass(e.target.value)}
                />

                <button className="btn">Submit</button>
                 
                <h1>{allEntry.map((currElem)=>{
                  return (
                      <div key={currElem.id}>
                          Email : {currElem.email} 
                          <br/>
                          Password :{currElem.password}
                      </div>
                  )
                })}</h1>
            </div>  
            
        </form> 
        </>
    )
}

export default LoginForm
