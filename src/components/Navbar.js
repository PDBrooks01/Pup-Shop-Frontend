import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import CartIcon from './CartIcon'
import './css/navbar.scss'
import Login from "./Login"
import SignUp from "./SignUp"


export default class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false,
      currentUser: {}
    }
  }

  logIn = (currentUser) =>{
    this.setState({
      isLoggedIn:true,
      currentUser: currentUser
    })
  }


  logout = ()=>{
    this.setState({
      isLoggedIn: false,
      currentUser: {}
    })
  }

  render(){
  return (
    <BrowserRouter>
    <nav>
      <div className="nav-menu container">
        <div className="logo">
          <a href="/home"> PUP SHOP </a>
        </div>
        <ul className="navbar-links">
        { this.state.isLoggedIn
          ?
          <div>
          <p> Hello, {this.state.currentUser.userFirstName}!</p>
          <li>
            <a href='/auth/login' onClick={()=>this.logout()}>Logout</a>
          </li>
          <li>
            <a href="/cart"> <CartIcon /> </a>
          </li>
        </div>
        :
          <div>
          <li>
            <a href="/auth/signup" >Sign Up</a>
          </li>

          <li>
            <a href="/auth/login"> Login </a>
          </li>
          <li>
            <a href="/cart"> <CartIcon /> </a>
          </li>
        </div>
        }
        </ul>
      </div>
    </nav>

    <Switch>
      <Route path ="/auth/login" render={(routeProps) => <Login {...routeProps} logIn={this.logIn} />} />
      <Route path ="/auth/signup" render={(routeProps) => <SignUp {...routeProps} />} logIn={this.logIn} />
    </Switch>
    </BrowserRouter>
  )}
}
// <Route path ="/home" render={(routeProps) => this.state.isLoggedIn ? <SignUp currentUser={this.state.currentUser}/>: <Login /> } />
