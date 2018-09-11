import styled from 'react-emotion'

import { media, colors } from '../styles/theme'
import { rem } from '../styles/tools'

const TextContainer = styled.div({
  padding: `${rem(40)} ${rem(16)}`,
  [media.mobileLg]: {
    padding: `${rem(40)} ${rem(24)}`,
  },
  [media._sm]: {
    padding: rem(40),
    boxShadow: `0 5px 25px ${colors.shadow.blue.light}`,
    backgroundColor: 'white',
    borderRadius: '8px',
  },
})

export default TextContainer
