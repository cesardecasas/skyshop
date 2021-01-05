import {GET_RANDOM} from '../types'

const iState ={
    items:[]
}

const HomeReducer=(state=iState,action)=>{
    switch(action.type){
        case GET_RANDOM:
            return{...state, items:action.payload}
        default:
            return{...state}
    }
}

export default HomeReducer