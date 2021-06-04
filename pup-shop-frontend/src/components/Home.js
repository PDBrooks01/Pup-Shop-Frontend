import React, { Component } from 'react'
import Products from "./Products"

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
    const res = await fetch(baseUrl +"/home",{
      method:"GET",
      body:JSON.stringify(),
      headers:{
        'Content-Type': 'application/json'
      }
      })
    const data = await res.json()
    //   data.map((product)=>({
    //   id: product.id,
    //   name:product.name
    // }))
    this.setState({
      products: data
    })
  }
  componentDidMount() {
    this.getProducts()
  }

  render() {
    console.log(this.state.products);
    return (
      <div>
      {
        this.state.products.map((product,i)=>{
          return(
          <ul>
            <li>  {product.name}
            {product.unit_price}</li>
          </ul>
          )
        })
      }
      </div>
    );
  }
}
