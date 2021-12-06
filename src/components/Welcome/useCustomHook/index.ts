import axios from 'axios'
import { useCallback, MouseEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearInputFieldValue } from '../../../redux/features/inputFieldSlice'
import { RootState } from '../../../redux/store'

export const useCustomHook = () => {
  // using bussiness logic for api here instead using it in redux because of time contraint
  const [apiState, setApiState] = useState<{ loading: boolean; data: any }>({
    loading: false,
    data: null
  })
  const { loading, data } = apiState

  const dispatch = useDispatch()

  const { value } = useSelector((state: RootState) => state.inputField)

  const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(clearInputFieldValue())
  }, [])

  const apiCall = useCallback(async () => {
    setApiState({ ...apiState, loading: true })
    try {
      const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${value}&origin=*&callback=`
      const _res = await axios.get(url)
      const { data: _data } = _res
      setApiState({ data: _data, loading: false })
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.error('ERROR ! ', error)
    }
  }, [setApiState])

  const handleWikiClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      e.stopPropagation()
      value && apiCall()
    },
    [value]
  )

  return { handleClick, handleWikiClick, loading, data, value }
}
