import { createContext,useReducer } from "react";
import * as actions from './actions'

export const CartContext = createContext()
const initialState = []
const reducerCart = (state,action) =>{
    switch(action.type){
        case actions.ADDTOCART:
            return [...state,action.payload]
        default:
            return state
    }
}

const CardProvider = ({children}) =>{
    const [myCart,dispachCart] = useReducer(reducerCart,initialState)
    const data = {
        myCart:myCart,
        dispachCart:dispachCart
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CardProvider