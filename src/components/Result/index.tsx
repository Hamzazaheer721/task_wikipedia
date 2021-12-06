import { memo } from 'react'
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Container, ResultArea, Title } from './index.styled'

const Result = memo(() => {
  const { value } = useSelector((state: RootState) => state.inputField)

  return (
    <Container>
      <Title>Converted Text</Title>
      <ResultArea>
        <ReactMarkdown>{value}</ReactMarkdown>
      </ResultArea>
    </Container>
  )
})

export default Result
