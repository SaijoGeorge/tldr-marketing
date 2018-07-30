import * as tools from './tools'

const breakpoints = {
  mobile: 1,
  tablet: 600,
  laptop: 1024,
  desktop: 1600,

  mobileSm: 1,
  mobileMd: 375,
  mobileLg: 425,

  tabletSm: 600,
  tabletMd: 768,
  tabletLg: 900,

  laptopSm: 1024,
  laptopMd: 1366,
  laptopLg: 1440,

  desktopSm: 1600,
  desktopMd: 1700,
  desktopLg: 1920,
}

const media = Object.entries(breakpoints).reduce((acc, [key, val]) => {
  acc[key] = `@media (min-width: ${tools.em(val)})`
  return acc
}, {})

const spaceValues = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 64,
  xxl: 128,
}

const spaceValuesInRems = Object.entries(spaceValues).reduce(
  (acc, [key, val]) => {
    acc[key] = tools.rem(val)
    return acc
  },
  {}
)

const space = {
  ...spaceValues,
  rem: spaceValuesInRems,
}

const colors = {
  text: {
    blue: {
      light: '#B1BFC6',
      dark: '#263E5B',
    },
  },
  bg: {
    blue: {
      light: '#EFF5F8',
      normal: '#CCE0EA',
    },
  },
}

export default {
  tools,
  breakpoints,
  media,
  space,
  colors,
}
