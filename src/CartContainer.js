import React from 'react'
import { useGlobalContext } from './context'
import CartItem from './CartItem'

const CartContainer = () => {
  const {cart,total,clearCart} = useGlobalContext();
  if(cart.length === 0){
    return(
      <main>
        <h1 className='text-3xl text-indigo-700 font-bold text-center mt-5'>Your Bag</h1>
        <h3 className='text-xl text-gray-400 text-center mt-5'>is currently empty</h3>
      </main>
    )
  }
  return (
    <main className=''>
      
       <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <div className='flex items-center justify-between px-8 mt-8'>
        <p className='text-xl '>Total</p>
        <p>{total}</p>
      </div>
      <button onClick={clearCart} className='text-2xl bg-indigo-600 text-white px-5 py-2 text-center flex justify-center items-center mx-auto my-4'>Clear Cart</button>
      
      
        
      
      
    </main>
  )
}

export default CartContainer