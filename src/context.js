import React,{ useContext,useEffect,useReducer} from "react";
import reducer from './reducer'



 const url = 'https://course-api.com/react-useReducer-cart-project'


const AppContext = React.createContext();
const initialState ={
    loading: false,
    cart: [],
    total:0,
    amount:0
}
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    //delete item
    function deleteItem(id){
    dispatch({type:'delete item', payload: id})
    
  
    
    }
    //increase
     const increaseItem= function(id) {
        dispatch({type:'increase', payload:id})
    }
    //decrease
    const decreaseItem = function(id) {
        dispatch({type:'decrease', payload:id})
    }
    function clearCart(){
        dispatch({type:'clearcart'})
    }
    const fetchData = async function () {
        dispatch({type: 'loading'})
        const response = await fetch(url)
        const cart = await response.json()
        console.log(cart)

        dispatch({type:'display items', payload: cart})
        
        

    }
    useEffect(( ) =>{
        fetchData()

    },[])
    useEffect(()=>{
        dispatch({type:'totals'})
},[state.cart])


    return(


    
    <AppContext.Provider value={{...state,
         deleteItem,
         decreaseItem,
         increaseItem,
         clearCart,
         
         
     }}>
        {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

