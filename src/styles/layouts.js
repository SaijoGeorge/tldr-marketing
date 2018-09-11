import styled from 'react-emotion'

import { media, space } from '../styles/theme'
import { rem } from '../styles/tools'

export const OuterLayout = styled.div({
  display: 'grid',
  height: '100vh',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',
  gridTemplate: `
    "OuterLayoutContent"
    / 1fr
  `,
  [media._sm]: {
    gridTemplate: `
      "OuterLayoutLeftBar . OuterLayoutContent ."
      / ${rem(50)} 2.5% calc(92.5% - ${rem(50)}) 5%
    `,
  },
  [media._md]: {
    gridTemplate: `
      "OuterLayoutLeftBar . OuterLayoutContent . OuterLayoutRightBar"
      / ${rem(80)} 2.5% calc(94% - ${rem(160)}) 3.5% ${rem(80)}
    `,
  },
})

export const InnerLayout = styled.div({
  display: 'grid',
  gridTemplate: `
    "." ${rem(22)}
    "InnerLayoutNavbar" auto
    "." ${rem(22)}
    "InnerLayoutMenu" auto
    "InnerLayoutContent" 1fr
    / 1fr
  `,
  [media._sm]: {
    gridTemplate: `
      ". ." ${space.lg}
      "InnerLayoutNavbar InnerLayoutMenu" auto
      ". ." ${space.lg}
      "InnerLayoutContent InnerLayoutContent" 1fr
      / 20% 80%
    `,
  },
  [media._md]: {
    gridTemplate: `
      ". ." ${rem(35)}
      "InnerLayoutNavbar InnerLayoutMenu" auto
      ". ." ${rem(35)}
      "InnerLayoutContent InnerLayoutContent" 1fr
      / 25% 75%
    `,
  },
  [media.desktop]: {
    gridTemplate: `
      ". ." ${rem(35)}
      "InnerLayoutNavbar InnerLayoutMenu" auto
      ". ." ${rem(35)}
      "InnerLayoutContent InnerLayoutContent" 1fr
      / 25% ${rem(1000)}
    `,
  },
})

export const ContentLayout = styled.div({
  display: 'grid',
  alignItems: 'start',
  paddingBottom: rem(50),
  gridTemplate: `
    "ContentLayoutSidebar"
    "ContentLayoutContent"
    / 1fr
  `,
  [media._sm]: {
    paddingBottom: space.xxl,
    gridTemplate: `
      "ContentLayoutSidebar ContentLayoutContent"
      / 20% 80%
    `,
  },
  [media._md]: {
    gridTemplate: `
      "ContentLayoutSidebar ContentLayoutContent"
      / 25% 75%
    `,
  },
  [media.desktop]: {
    gridTemplate: `
      "ContentLayoutSidebar ContentLayoutContent"
      / minmax(25%, 1fr) ${rem(1000)}
    `,
  },
})

export default ContentLayout
