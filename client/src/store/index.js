import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import UserReducer from './reducers/UserReducer'
import HomeReducer from './reducers/HomeReducer'
import UploadReducer from './reducers/UploadReducer' 

const store = createStore(combineReducers({
        user:UserReducer,
        homeState:HomeReducer,
        uploadState:UploadReducer
}),applyMiddleware(thunk))



export default store