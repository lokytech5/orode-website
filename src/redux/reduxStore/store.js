import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../reduxReducers/authReducer'

const rootReducer = combineReducers({
    auth: authReducer
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;