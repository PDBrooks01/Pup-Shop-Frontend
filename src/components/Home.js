import React, { Component } from 'react'
import './css/Home.scss'
import Loading from './Loading'


let baseUrl = ''
if (process.env.NODE_ENV === 'development') {
  baseUrl = `http://localhost:3003`
}else{
  baseUrl = 'https://pupshopbackend.herokuapp.com/'
}

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: [],
      single:[]
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
    this.setState({
      products: data
    })
  }
  productShow = async(id)=>{

    const res = await fetch(baseUrl +"/home/"+ id,{
      method:"GET",
      body:JSON.stringify(),
      headers:{
        'Content-Type': 'application/json',

      }
    })
    const data = await res.json()
      this.setState({
      single: data
    })
  }



  componentDidMount() {
    this.getProducts()
  }



  render() {
    // console.log(this.state)

    return (
      <div>
        <div className="text container">
          <h2 align="center"> Welcome to Pup Shop!</h2>
          <h4 align="center"> Only the best Food, Toys, Treats, and more!</h4>
        </div>
      <div className="product container">
      {
        this.state.products.map((product,i)=>{
          return(
          <ul>
            <li key={product.id}>
            <a href={"/home/"+ product.id}>
            <p> {product.name}</p>
            <p> $ {product.unit_price}</p>
             <img src ={product.img} alt={product.name} />
            </a>
            <br></br>
            <button>Add to Cart</button>
            </li>
          </ul>
          )
        })
    }
      </div>
      </div>
    );
  }
}
