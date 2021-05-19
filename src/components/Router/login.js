import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
    const diffToast = () =>{
        toast("login successful",{position: 'top-center'});
    }
    return (
        <>
        <div>
            <h1>Login</h1>
            <button onClick={diffToast}>Please login</button>
        </div>
        <ToastContainer/>
        </>
    )
}

export default Login
