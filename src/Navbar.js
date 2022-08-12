import React from 'react'
import { useGlobalContext } from './context'


const Navbar = () => {
  const {amount} = useGlobalContext();
  return (
    <nav className='bg-blue-500 h-16 flex items-center justify-between px-8 text-white font-semibold font-xl tracking-wide'>
      <h1>UseReducer</h1>
      <div>
      <p>Amount : <span>{amount}</span></p>

      </div>
    </nav>
  )
}

export default Navbar