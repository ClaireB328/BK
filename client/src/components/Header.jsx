import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

export default function Header(props) {
    return (
        <>
        <header className="header">

            <Link to='/'>
            <h1>Brooklyn Restaurateur Review</h1>
            </Link>
           </header>

           <nav className="nav"> 
            {
                props.currentUser 
                ? 
                <>{props.currentUser.username}<button className="logout" onClick={props.handleLogout}>Logout</button></> 
                : 
                <Link className="login-button" to='/user/login'><button className="home-nav-login">Login</button></Link>
            }

            <Link className="register-button" to='/user/register'><button className="home-nav-register">Register</button></Link>
           
        </nav>
        </>
    )
}
