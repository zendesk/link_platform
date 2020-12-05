import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

const useNavigation = (path) => {
  const dispatch = useDispatch()
  return path => dispatch(push(path))
}

export default useNavigation
