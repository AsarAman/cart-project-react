

function reducer(state, action){
    if(action.type === 'loading'){
        return {...state, loading: true}
    
    }
    if(action.type === 'display items'){
        return {
            ...state,cart:action.payload,loading:false
        }
    }
    if(action.type === 'delete item'){
    
        return{...state, cart: state.cart.filter((item)=>item.id!==action.payload)}
    }
    if(action.type === 'increase'){
        let tempCart = state.cart.map((cartItem)=>{
            if(cartItem.id === action.payload){
                return{...cartItem, amount: cartItem.amount+1}
            }
            return cartItem
        })
        return {...state, cart:tempCart}

    
    }
     if(action.type === 'decrease'){
        let tempCart = state.cart.map((cartItem)=>{
            if(cartItem.id === action.payload){
                return{...cartItem, amount: cartItem.amount-1}
            }
            return cartItem
        }).filter((cartItem)=> cartItem.amount !== 0)
        return {...state, cart:tempCart}

    
    }
    if (action.type === 'clearCart') {
        return {
            ...state, cart:[]
        }
    }
    if (action.type === 'totals') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem
        const itemTotal = price * amount

        cartTotal.total += itemTotal
        cartTotal.amount += amount
        return cartTotal
      },
      {
        total: 0,
        amount: 0,
      }
    )
    total = parseFloat(total.toFixed(2))

    return { ...state, total, amount }
  }

    
}
export default reducer