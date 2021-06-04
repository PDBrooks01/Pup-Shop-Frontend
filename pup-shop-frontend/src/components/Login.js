import React, { Component } from 'react'

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    first_name:"",
    error: ""
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
      <div className="Login-Container">
        <h2> Login </h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email: </label>
          <input type='email' name='email' required onChange={this.handleChange} />
          <br></br>
          <label>Password: </label>
          <input type='text' name='password' required onChange={this.handleChange} />
          <br></br>
          <input type="submit" value="Login"/>
        </form>

      </div>
    )
  }
}
