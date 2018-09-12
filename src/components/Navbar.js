import styled from 'react-emotion'

import { media, colors } from '../styles/theme'
import { rem } from '../styles/tools'

const Navbar = styled.nav({
  display: 'flex',
  alignItems: 'center',
  height: rem(70),
  position: 'sticky',
  top: 0,
  zIndex: 3,
  color: 'white',
  [media._sm]: {
    paddingTop: rem(15),
    paddingBottom: rem(15),
    color: colors.text.blue.light,
    backgroundColor: colors.bg.blue.light,
    boxShadow: `0 0 30px 15px ${colors.bg.blue.light}, 30px 0 30px 15px ${
      colors.bg.blue.light
    }`,
  },
  [media.max._sm]: {
    height: rem(53),
    padding: rem(10),
    whiteSpace: 'nowrap',
    backgroundColor: colors.bg.blue.dark,
    overflowX: 'auto',
    overflowY: 'hidden',
    WebkitOverflowScrolling: 'touch',
  },
})

export default Navbar
