import React from "react";
import { useGlobalContext } from "./context";
import Navbar from './Navbar'
import CartContainer from './CartContainer'

function App() {
  const {loading} = useGlobalContext();
  if(loading) {
    return(
      <div>
        <h1 className='text-3xl font-bold text-center mt-8'>
          Loading...
        </h1>
      </div>
    )
  }
  return (
   <main className=''>
    <Navbar/>
    <CartContainer/>
   </main>
  );
}

export default App;
