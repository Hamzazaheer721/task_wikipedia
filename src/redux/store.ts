import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './features/apiSlice'
import { inputFieldSlice } from './features/inputFieldSlice'

export const store = configureStore({
  reducer: {
    inputField: inputFieldSlice.reducer,
    api: apiSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
