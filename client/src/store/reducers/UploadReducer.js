import {CHANGE, CHANGE_INT} from '../types'

const iState ={
    name:'',
    image:'',
    description:'',
    stock:0,
    price:0
}

const UploadReducer=(state=iState,action)=>{
    switch(action.type){
        case CHANGE:
            return{...state, [action.payload.name]: action.payload.value}
        case CHANGE_INT:
            return{...state, [action.payload.name]: action.payload.value}
        default:
            return{...state}
    }
}

export default UploadReducer