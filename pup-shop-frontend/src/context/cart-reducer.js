export const sumItems = cartItems =>{
  return{
    itemCount: cartItems.reduce((total,prod) => total + prod.quantity , 0),
    total: cartItems.reduce((total,prod)=>total +(prod.unit_price*prod.quantity),0)
  }
}

const cartReducer = (state, action)=>{
  switch (action.type) {
    case 'Add_Item':
    if(!state.cartItems.find(item=>item.id === action.payload.id)){
      state.cartItems.push({
        ...action.payload,
        quantity:1,
      })
    }
    return {
      ...state,
      cartItems:[...state.cartItems],
      ...sumItems(state.cartItems),
    }
    default:
    return state;
  }
}

export default cartReducer;
