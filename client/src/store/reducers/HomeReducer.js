import {GET_RANDOM, SEARCH, SEARCH_VALUE} from '../types'

const iState ={
    items:[],
    searchItems:[],
    search:''
}

const HomeReducer=(state=iState,action)=>{
    switch(action.type){
        case GET_RANDOM:
            return{...state, items:action.payload}
        case SEARCH:
            return{...state, searchItems:action.payload}
        case SEARCH_VALUE:
            return{...state, [action.payload.name]: action.payload.value}
        default:
            return{...state}
    }
}

export default HomeReducer