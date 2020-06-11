import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { loginUser, registerUser } from './services/auth'


export default class App extends Component {
  state = {
    currentUser: null
  }

  handleLoginSubmit = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  }

  handleRegisterSubmit = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser });
  }


  render() {
    return (
      <div>
        <Header />
        <Main
         handleLoginSubmit={this.handleLoginSubmit}
         handleRegisterSubmit={this.handleRegisterSubmit}
        
         />
      </div>
    )
  }
}

