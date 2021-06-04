import React, { Component } from 'react'

class Products extends Component {
  constructor(props){
    super(props)
    this.state={
      id: "",
      name:"",
      unit_price:"",
      description:""
    }
  }

  render(){
    return(
      <div>
        <ul>
          <li> {this.state.name}</li>
          <li> {this.state.unit_price}</li>
        </ul>
      </div>
    )
  }
}
export default Products
