//Create a Redux Store
//This creates a Redux store, 
//and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.
import { configureStore } from '@reduxjs/toolkit'
//Add Slice Reducers to the Store
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    //we tell the store to use this slice reducer function to handle all updates to that state.
    counter: counterReducer
  }
}) 

