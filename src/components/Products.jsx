import React, {Component} from 'react'
import "./css/singleProduct.scss"

let baseUrl = ''
if (process.env.NODE_ENV === 'development') {
  baseUrl = ``
}else{
  baseUrl = 'https://pupshopbackend.herokuapp.com/'
}

export default class Products extends Component{
  constructor(props){
    super(props)
    this.state={
      single: []
    }
}

    productShow = async()=>{

      const res = await fetch(baseUrl +"/home/"+ this.props.match.params.id,{
        method:"GET",
        body:JSON.stringify(),
        headers:{
          'Content-Type': 'application/json',

        }
      })
      const data = await res.json()
        console.log(data);
        this.setState({
        single: data
      })
    }


    componentDidMount(){
        this.productShow()
    }

  render(){
    // console.log(this.state.single);
    // console.log(this.state);
    return(
      <div className='products container'>
      {
        this.state.single.map((product,i)=>{
          return(
          <div>
            <div className="product-name">
            <h2> {product.name} </h2>
            </div>
            <div className="product-img">
            <img src={product.img} alt={product.name} />
            </div>
            <div className="price">
              <p> Price: ${product.unit_price}</p>
            </div>
          </div>
          )
        })
      }


      <button className="Add">Add to Cart</button>


      </div>
    )
  }


}
