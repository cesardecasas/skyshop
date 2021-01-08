import {CHANGE} from '../types'


export const change=(name,value)=>({
    type:CHANGE,
    payload: {
        name,
        value
      }
})

