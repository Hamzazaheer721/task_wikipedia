import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './index'

export const setInputField: CaseReducer<
  { value: string },
  PayloadAction<string>
> = (state = initialState, action) => {
  const { payload } = action
  state.value = payload
}

export const clearInputField: CaseReducer<{ value: string }> = (state) => {
  state.value = ''
}
