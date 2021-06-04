import './css/App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import React, { Component } from 'react'

import Loading from "./Loading"
import Home from"./Home"
import Login from "./Login"
import SignUp from "./SignUp"


class App extends Component {
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
    // console.log(this.state.currentUser);
    return (
      <BrowserRouter>
        <div className="navbar">
          <Link className="PupShop-Logo" to='/home'></Link>
          {this.state.isLoggedIn
            ? <div className="loggedInNav">
              <p>Hello, {this.state.currentUser.userFirstName}!</p>
              <Link to='/home'>Pup Shop</Link>
              <Link to='/auth/login' onClick={()=>this.logout()}>Logout</Link>
              </div>
            : <div>
             <Route exact path ="/" render={()=><Loading />} />
              <Link to='/auth/login'>Login </Link>
              <Link to='/auth/signup'>Sign Up</Link>
              </div>
            }
        </div>
        <Switch>
          <Route exact path ="/home" render={()=><Loading />} />
          <Route exact path ="/auth/login" render={(routeProps) => <Login {...routeProps} logIn={this.logIn} />} />
          <Route exact path ="/auth/signup" render={(routeProps) => <SignUp {...routeProps} />} logIn={this.logIn} />
          <Route exact path ="/home" render={(routeProps) => this.state.isLoggedIn ? <Home currentUser={this.state.currentUser} /> : <Login {...routeProps} logIn={this.logIn} />} />

        </Switch>

        <Home key={this.props.id}/>
      </BrowserRouter>
    );
  }
}

export default App;
