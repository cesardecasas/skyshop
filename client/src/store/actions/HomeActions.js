import {GET_RANDOM, SEARCH, SEARCH_VALUE} from '../types'
import {__getRandom, __searchProduct} from '../../services/ProductServices'


export const getRandom =()=>async(dispatch)=>{
    try {
        const products = await __getRandom()
        dispatch({
            type:GET_RANDOM,
            payload:products
        })
        
    } catch (error) {
        return error 
    }
} 

export const getSearched=(value)=>async(dispatch)=>{
    try {
        const products = await __searchProduct(value)
        dispatch({
            type:SEARCH,
            payload:products
        })
    } catch (error) {
        return error 
    }
}

export const search=(name,value)=>({
    type:SEARCH_VALUE,
    payload: {
        name,
        value
      }
})