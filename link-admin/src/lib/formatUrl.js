import { format } from 'prettier'

const formatUrl = url => {
  if(!url.match(/^http[s]?:\/\//)) {
    return `http://${url}`
  }
  return url
}
export default formatUrl
