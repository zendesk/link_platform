const screenSizes = {
  'xs': 320,
  'sm': 640,
  'md': 768,
  'lg': 1024,
  'xl': 1280,
  '2xl': 1536
}

const theme = {
  sizes: screenSizes,
  breakpoints: {}
}

for(const [key, value] of Object.entries(screenSizes)) {
  theme.breakpoints[key] = `(min-width: ${value}px)`
}

export default theme
