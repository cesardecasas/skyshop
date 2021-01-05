import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import UserReducer from './reducers/UserReducer'
import HomeReducer from './reducers/HomeReducer'

const store = createStore(combineReducers({
        user:UserReducer,
        homeState:HomeReducer
}),applyMiddleware(thunk))



export default store