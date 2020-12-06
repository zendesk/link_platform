import { DEFAULT_THEME } from '@zendeskgarden/react-theming'

const screenSizes = {
  'xs': 320,
  'sm': 640,
  'md': 768,
  'lg': 1024,
  'xl': 1280,
  '2xl': 1536
}

const theme = {
  ...DEFAULT_THEME,
  sizes: screenSizes,
  breakpoints: {},
  sidebar: {
    width: {
      closed: '65px',
      open: '150px'
    }
  }
}

for(const [key, value] of Object.entries(screenSizes)) {
  theme.breakpoints[key] = `${value}px`
}

theme.colors = {
  ...theme.colors,
  support: theme.palette.mint[400],
  explore: '#30aabc',
  gather: '#f6c8be',
  guide: '#ff6224',
  connect: '#ff6224',
  chat: theme.palette.yellow[500],
  talk: '#efc93d',
  sell: theme.palette.lemon.M600
}

console.log(theme.colors.explore)

export default theme
