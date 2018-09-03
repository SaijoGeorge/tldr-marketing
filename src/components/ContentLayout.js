import styled from 'react-emotion'

import { media, space } from '../styles/theme'
import { min, rem } from '../styles/tools'

const ContentLayout = styled.div({
  display: 'grid',
  alignItems: 'start',
  paddingBottom: rem(50),
  gridTemplate: `
    "ContentLayoutSidebar"
    "ContentLayoutContent"
    / 1fr
  `,
  [min(940)]: {
    paddingBottom: space.rem.xxl,
    gridTemplate: `
      "ContentLayoutSidebar ContentLayoutContent"
      / 20% 80%
    `,
  },
  [min(1130)]: {
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
