import React, { Component } from 'react'

let baseUrl = ''
if (process.env.NODE_ENV === 'development') {
  baseUrl = `http://localhost:3003`
}

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: [],
    }
  }
  getProducts = async()=>{
    const res = await fetch(baseUrl +"/home")
    const data = await res.json()
    this.setState({
      products: data,
    })
  }
}
