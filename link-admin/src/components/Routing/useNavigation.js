import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

const useNavigation = () => {
  const dispatch = useDispatch()
  return path => dispatch(push(path))
}

export default useNavigation
