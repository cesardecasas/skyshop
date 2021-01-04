
import {CURRENT_USER,AUTHENTICATED} from '../types'


export const auth =(value)=>({
    type: AUTHENTICATED,
    payload:value
})

export const user=(str)=>({
    type: CURRENT_USER,
    payload:str
})