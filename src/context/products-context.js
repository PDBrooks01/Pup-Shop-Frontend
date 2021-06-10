import React, { createContext, useState} from 'react';
import Home from '../components/Home'

export const ProductsContext = createContext();
const ProductsContextProvider = ({ children })=>{
  const [products]=useState(new Home ())

  return(
    <ProductsContext.Provider value={{products}}>
    { children }
    </ProductsContext.Provider>
  )

}
export default ProductsContextProvider;
