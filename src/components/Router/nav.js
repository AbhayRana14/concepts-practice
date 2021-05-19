import React from 'react'
import { NavLink } from 'react-router-dom'
import "./App.css"

const Nav = () => {
    return (
        <div className="navbar">
            <NavLink to="/home"><h1>Home</h1></NavLink>
            <NavLink to="/about"><h1>About</h1></NavLink>
            <NavLink to="/index"><h1>Index</h1></NavLink>
            <NavLink to="/login"><h1>Login</h1></NavLink>
        </div>
    )
}

export default Nav
