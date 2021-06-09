import React, { Component } from 'react'
import './css/signup.scss'

export default class SignUp extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    pets:[]
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
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email:this.state.email,
      password: this.state.password,
    }
    try{
      const response = await fetch('http://localhost:3003/auth/signup',{
        method: "POST",
        body:JSON.stringify(user),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      if (response.status === 201){
        console.log('User Created')
        this.props.history.push('/home')
      }
    }
    catch (err) {
      console.log('error:', err)
    }
  }

  componentDidMount() {
    this.setState({
      first_name: "",
      last_name:"",
      email:"",
      password:""
    })
  }

render(){
  return(
    <div className="main">
      <h2 className="sign" align="center"> Sign Up </h2>
      <form onSubmit={this.handleSubmit} className="form1">

        <input className="un"  placeholder="First Name" align="center" type='text' name='first_name' required onChange={this.handleChange} />
        <input className="un"  type='text' align="center" name='last_name' placeholder="Last Name" required onChange={this.handleChange} />
        <input className="un"  type='email' align="center" name='email' placeholder="Email" required onChange={this.handleChange} />

        <input className="pass" align="center"type='text' name='password' placeholder="Password"  required onChange={this.handleChange} />
        <input className="submit" align="center"type="submit" value="Sign Up!"/>
      </form>

    </div>
  )
}


}
