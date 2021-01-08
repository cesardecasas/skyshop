import {CART} from '../types'
import {__getItems} from '../../services/CartServices'

export const getItems=(id)=>async(dispatch)=>{
    try {
        const items = await __getItems(id)
        dispatch({
            type:CART,
            payload:items
        })
        
    } catch (error) {
        console.log(error)
    }
}