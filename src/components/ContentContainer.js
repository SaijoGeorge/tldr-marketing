import styled from 'react-emotion'

import { media } from '../styles/theme'
import { rem } from '../styles/tools'

const ContentContainer = styled.div({
  paddingLeft: rem(16),
  paddingRight: rem(16),
  [media.mobileLg]: { paddingLeft: rem(24), paddingRight: rem(24) },
  [media._sm]: { paddingLeft: 0, paddingRight: 0 },
})

export default ContentContainer
