import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import UserReducer from './reducers/UserReducer'

const store = createStore(combineReducers({
        user:UserReducer
}),applyMiddleware(thunk))



export default store