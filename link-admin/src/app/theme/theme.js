import { DEFAULT_THEME } from '@zendeskgarden/react-theming'
import themeExtras from './themeExtras'
import { merge } from 'lodash'

const defaultSettings = merge(DEFAULT_THEME, themeExtras)

const theme = {
  ...defaultSettings,
  sidebar: {
    width: {
      closed: '65px',
      open: '200px'
    }
  }
}

export default theme
