import { CURRENT_USER, AUTHENTICATED} from '../types'

const iState ={
    currentUser:null,
    authenticated:false
}

const UserReducer = (state=iState,action)=>{
    switch(action.type){
        case CURRENT_USER:
            return {...state, currentUser:action.payload}
        case AUTHENTICATED:
            return {...state, authenticated:action.payload}
        default:
            return{...state}
    }
}

export default UserReducer