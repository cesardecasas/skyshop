import {GET_RANDOM} from '../types'
import {__getRandom,__addProduct,__getByLabel,__getById,__removeProduct} from '../../services/ProductServices'


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