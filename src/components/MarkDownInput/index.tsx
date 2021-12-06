import { memo } from 'react'
import { Container, TextArea, Title } from './index.styled'
import { useCustomHook } from './useCustomHook'

const MarkDownInput = memo(() => {
  const { inputRef, handleDebouncedChange } = useCustomHook()

  return (
    <Container>
      <Title>Markdown Text</Title>
      <TextArea ref={inputRef} onChange={handleDebouncedChange} />
    </Container>
  )
})

export default MarkDownInput
