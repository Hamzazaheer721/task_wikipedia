import { useLayoutEffect, ChangeEvent, memo, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInputFieldValue } from '../../redux/features/inputFieldSlice'
import { RootState } from '../../redux/store'
import { Container, TextArea, Title } from './index.styled'

const MarkDownInput = memo(() => {
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

  return (
    <Container>
      <Title>Markdown Text</Title>
      <TextArea ref={inputRef} onChange={handleChange} />
    </Container>
  )
})

export default MarkDownInput
