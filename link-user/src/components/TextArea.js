import preact from 'preact'
import s from './TextArea.css'

const TextArea = (props) => (
  <textarea
    className={s.input}
    {...props}
  />
)

export default TextArea
