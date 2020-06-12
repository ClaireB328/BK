import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(props) {
    return (
        <div>
            <Link to='/home/'>
            <h1>Brooklyn Restaurateur Review</h1>
            </Link>
            {
            props.currentUser 
            ? 
            <>{props.currentUser.username}<button onClick={props.handleLogout}>Logout</button></> 
            : 
            <Link to='/user/login'>Login</Link>
            }

            <Link to='/user/register'>Register</Link>
            <hr />
        </div>
    )
}
