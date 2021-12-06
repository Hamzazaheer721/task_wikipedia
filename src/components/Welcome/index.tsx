import { FC, memo } from 'react'
import MarkDownInput from '../MarkDownInput'
import Result from '../Result'
import { AppContainer, EditorContainer, Title } from './index.styled'
import { useCustomHook } from './useCustomHook'

const WelcomeComponent: FC<{}> = memo(() => {
  const { handleClick, handleWikiClick, loading, data } = useCustomHook()
  return (
    <AppContainer>
      <Title>Markdown Editor</Title>
      <EditorContainer>
        <MarkDownInput />
        <Result />
      </EditorContainer>
      <button type="button" onClick={handleClick}>
        Clear!
      </button>
      <br />
      <button type="button" onClick={handleWikiClick}>
        Wikipedia
      </button>
      <br />
      <br />
      <>
        {loading && <Title>Loading... </Title>}
        {data && <h3>{data}</h3>}
      </>
    </AppContainer>
  )
})

export default WelcomeComponent
