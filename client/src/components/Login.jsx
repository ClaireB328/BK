import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Login.css'

export default class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })

    }

    render() {
        const { username, password } = this.state;
        const { handleLoginSubmit, history } = this.props;
        return (
            <form className="login-form" 
                onSubmit={(e) => {
                e.preventDefault();
                handleLoginSubmit(this.state);
                history.push('/');
                this.setState({
                    username: "",
                    password: ""
                })

            }}>
                <h3 className="login-form-title">Login</h3>
                <label htmlFor="username">username:
              <input className="login-input"
              id="username"
              type="text" 
              name="username" 
              value={username} 
              onChange={this.handleChange} 
            />  
            </label>
            <br />
            <label htmlFor="password">password:
            <input className="password-input"
              id="password"
              type="password" 
              name="password" 
              value={password} 
              onChange={this.handleChange} 
            />  
            </label>
            <br />
            {/* <Link to='/user/register'>Register</Link> */}
            <button className="login-submit">Submit</button>
            </form>
        )
    }
}
