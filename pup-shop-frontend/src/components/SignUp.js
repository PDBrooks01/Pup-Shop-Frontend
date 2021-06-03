import React, { Component } from 'react'

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
    <div className="SignUp-Container">
      <h2> Sign Up </h2>
      <form onSubmit={this.handleSubmit}>
        <label>First Name: </label>
        <input type='text' name='first_name' required onChange={this.handleChange} />
        <br></br>
        <label>Last Name: </label>
        <input type='text' name='last_name' required onChange={this.handleChange} />
        <br></br>
        <label>Email: </label>
        <input type='email' name='email' required onChange={this.handleChange} />
        <br></br>
        <label>Password: </label>
        <input type='text' name='password' required onChange={this.handleChange} />
        <br></br>
        <input type="submit" value="Sign Up!"/>
      </form>

    </div>
  )
}


}
