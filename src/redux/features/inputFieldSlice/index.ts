import { createSlice } from '@reduxjs/toolkit'
import { setInputField, clearInputField } from './caseReducer'

export interface IIntialStateProps {
  value: string
}

export const initialState: IIntialStateProps = {
  value: ''
}

export const inputFieldSlice = createSlice({
  name: 'inputField',
  initialState,
  reducers: {
    setInputField,
    clearInputField
  }
})

export const {
  setInputField: setInputFieldValue,
  clearInputField: clearInputFieldValue
} = inputFieldSlice.actions
