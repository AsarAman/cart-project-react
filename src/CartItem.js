import React from 'react'
import { useGlobalContext } from './context'
const CartItem = ({id,title,price,img,amount}) => {
  const {deleteItem,decreaseItem,increaseItem} = useGlobalContext();
  return (
    <main>
      <article>
        <div className='flex items-center mt-10 '>
        <img className='w-24' src={img} alt={title}></img>
        <div className='flex-1'>
          <p>{title}</p>
          <p>${price}</p>
          <button onClick={()=> deleteItem(id)}>remove</button>
        </div>
        <div className='mr-10'>
          <button onClick={()=> increaseItem(id)}>inc</button>
          <p>{amount}</p>
          <button onClick={()=> decreaseItem(id)}>dec</button>
        </div>
        </div>
      </article>
    </main>
  )
}

export default CartItem