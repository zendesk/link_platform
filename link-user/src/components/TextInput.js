import preact from 'preact'
import s from './TextInput.css'

const TextInput = (props) => (
  <input
    className={s.input}
    {...props}
    type="text"
  />
)

export default TextInput
