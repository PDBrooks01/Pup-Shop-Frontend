import React, { Component } from 'react'
import "./css/login.scss"
export default class Login extends Component {
  state = {
    email: "",
    password: "",
    first_name:"",
    error: "",
    isOpen: false
  }

  handleChange = (event)=>{
    const {name,value} = event.target
    this.setState({
      [name]:value
    })
  }
  handleSubmit = async (event)=>{
    event.preventDefault()
    const user = {
      email:this.state.email,
      password: this.state.password,
    }
    try{
      const response = await fetch('http://localhost:3003/auth/login',{
        method: "POST",
        body:JSON.stringify(user),
        headers:{
          'Content-Type': 'application/json'
        },
        credential: "include"
      })
      if (response.status === 200){
        // console.log('User Logged In!')
        const currentUser = await response.json()
        this.props.logIn(currentUser)
        this.props.history.push('/home')
      }
      else if (response.status === 401) {
        this.setState({
          error: 'Invalid Username or Password'
        })
      }
    }
    catch (err) {
      console.log('error:', err)
    }
  }


  componentDidMount() {
    this.setState({
      email:"",
      password:""
    })
  }

  render(){
    return(

      <div className="main">
        <h2 className="sign" align="center"> Login </h2>
        <form onSubmit={this.handleSubmit} className="form1">
          <input className="un" align="center" type='email' name='email' placeholder="Email" equired onChange={this.handleChange} />
          <input className="pass" align="center" type='text' name='password' placeholder="Password" required onChange={this.handleChange} />
          <input className="submit" align="center" type="submit" value="Login"/>
        </form>
      </div>


    )
  }
}
