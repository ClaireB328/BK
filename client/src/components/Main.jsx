import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Login from './Login'

export default class Main extends Component {
    render() {
        return (
            <main>
                <Route path='/user/login' render={()=>(
                    <Login />
                )}/>
                <Route path='/user/register' render={()=>(
                    <h2>Register</h2>
                )}/>
            </main>
        )
    }
}
