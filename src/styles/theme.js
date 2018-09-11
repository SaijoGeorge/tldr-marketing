import { mediaGetters, spaceGetters } from './tools'

export const media = mediaGetters({
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

  _sm: 960,
  _md: 1130,
})

export const space = spaceGetters({
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 64,
  xxl: 128,
})

export const colors = {
  text: {
    grey: {
      heading: '#333',
      body: '#777',
    },
    blue: {
      light: '#B1BFC6',
      medium: '#3186b1',
      dark: '#263E5B',
    },
  },
  bg: {
    grey: {
      lightest: '#f6f6f6',
    },
    blue: {
      light: '#EFF5F8',
      normal: '#D6E3E9',
      medium: '#89ADDB',
      dark: '#263E5B',
    },
  },
  border: {
    blue: {
      light: '#e0ebf1',
      normal: '#add2e4',
    },
  },
  shadow: {
    blue: {
      light: '#CFDEE5',
    },
  },
}
