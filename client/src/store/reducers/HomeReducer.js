import {GET_RANDOM, SEARCH, SEARCH_VALUE, ITEM} from '../types'

const iState ={
    items:[],
    searchItems:[],
    search:'',
    item:{}
}

const HomeReducer=(state=iState,action)=>{
    switch(action.type){
        case GET_RANDOM:
            return{...state, items:action.payload}
        case SEARCH:
            return{...state, searchItems:action.payload}
        case SEARCH_VALUE:
            return{...state, [action.payload.name]: action.payload.value}
        case ITEM:
            return{...state, item:action.payload}
        default:
            return{...state}
    }
}

export default HomeReducer