import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <Link to='/home/'>
            <h1>Brooklyn Restaurateur Review</h1>
            </Link>
            <Link to='/user/login'>Login</Link>
            <Link to='/user/register'>Register</Link>
            <hr />
        </div>
    )
}
