import { configureStore } from '@reduxjs/toolkit'
import csvReducer from './reducer'

const store = configureStore({
  reducer: {
    csvData: csvReducer
  }
})

export default store