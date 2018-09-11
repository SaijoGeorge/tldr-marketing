import styled from 'react-emotion'

import { media, colors } from '../styles/theme'
import { rem } from '../styles/tools'

const StyledLoadingBar = styled.div({
  maxWidth: rem(1000),
  marginBottom: rem(100),
  marginLeft: 'auto',
  padding: rem(23),
  fontWeight: 800,
  fontSize: rem(19),
  textAlign: 'center',
  color: colors.text.blue.light,
  border: `solid 2px ${colors.border.blue.light}`,
  [media._sm]: {
    width: '80%',
    marginTop: rem(-50),
    borderRadius: '10px',
  },
  [media._md]: {
    width: '75%',
  },
})

export default StyledLoadingBar
