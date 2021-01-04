import { CURRENT_USER, AUTHENTICATED,NAME,EMAIL,PASSWORD, ERROR} from '../types'

const iState ={
    currentUser:null,
    authenticated:false,
    name:'',
    email:'',
    password:'',
    error:false
}

const UserReducer = (state=iState,action)=>{
    switch(action.type){
        case CURRENT_USER:
            return {...state, currentUser:action.payload}
        case AUTHENTICATED:
            return {...state, authenticated:action.payload}
        case NAME:
            return{...state, name:action.payload}
        case EMAIL:
            return{...state, email:action.payload}
        case PASSWORD:
            return{...state, password:action.payload}
        case ERROR:
            return {...state, error: action.payload}
        default:
            return{...state}
        
    }
}

export default UserReducer