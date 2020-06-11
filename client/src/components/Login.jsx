import React, { Component } from 'react'

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
        return (
            <form>
                <h3>LOG IN</h3>
                <label htmlFor="username">username:</label>
              <input 
              id="username"
              type="text" 
              name="username" 
              value={username} 
              onChange={this.handleChange} 
            />  
            <br />
            <label htmlFor="password">password:</label>
            <input
              id="password"
              type="password" 
              name="password" 
              value={password} 
              onChange={this.handleChange} 
            />  
            <br />
            </form>
        )
    }
}
