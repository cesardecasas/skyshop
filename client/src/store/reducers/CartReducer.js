import {CART} from '../types'

const iState ={
    cartItems:[]
}

const CartReducer=(state=iState,action)=>{
    switch(action.type){
        case CART:
            return{...state,cartItems:action.payload}
        default:
            return{...state}
    }
}

export default CartReducer