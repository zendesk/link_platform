import { createComponent } from 'react-fela'

const Spacer = createComponent(({ space }) => ({
  width: `${space}rem`
}))

export default Spacer
