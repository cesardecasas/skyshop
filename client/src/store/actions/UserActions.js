import {} from '../../services/UserServices'
import {CURRENT_USER,AUTHENTICATED,EMAIL,NAME,PASSWORD, ERROR} from '../types'


export const auth =(value)=>({
    type: AUTHENTICATED,
    payload:value
})

export const user=(str)=>({
    type: CURRENT_USER,
    payload:str
})

export const email=(str)=>({
    type:EMAIL,
    payload:str
})

export const name=(str)=>({
    type:NAME,
    payload:str
}) 

export const password=(str)=>({
    type:PASSWORD,
    payload:str
})

export const error=(value)=>({
    type: ERROR,
    payload: value
})