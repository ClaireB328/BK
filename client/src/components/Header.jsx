import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

export default function Header(props) {
    return (
        <nav>
            <Link to='/'>
            <h1>Brooklyn Restaurateur Review</h1>
            </Link>
            {
            props.currentUser 
            ? 
            <>{props.currentUser.username}<button onClick={props.handleLogout}>Logout</button></> 
            : 
            <Link className="login" to='/user/login'><button>Login</button></Link>
            }

            <Link className="register" to='/user/register'><button>Register</button></Link>
            <hr />
        </nav>
    )
}
