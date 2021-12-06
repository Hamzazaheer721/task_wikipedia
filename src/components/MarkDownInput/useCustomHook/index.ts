import { useRef, useCallback, ChangeEvent, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'lodash'
import { setInputFieldValue } from '../../../redux/features/inputFieldSlice'
import { RootState } from '../../../redux/store'

export const useCustomHook = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const dispatch = useDispatch()
  const { value: _val } = useSelector((state: RootState) => state.inputField)

  useLayoutEffect(() => {
    if (!_val && inputRef.current) {
      inputRef.current.value = _val
    }
  }, [_val])

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const { value } = e.target
    dispatch(setInputFieldValue(value))
  }, [])

  const handleDebouncedChange = debounce(handleChange, 500)

  return { inputRef, handleDebouncedChange }
}
