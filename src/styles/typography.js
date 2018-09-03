import styled from 'react-emotion'
import { Link } from 'gatsby'

import { space, colors } from './theme'
import { min, rem } from './tools'

export const Logo = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 800,
  fontSize: 20,
  lineHeight: 1,
  color: colors.text.blue.dark,
  background: 'rgba(239, 245, 248, 0.9)',
  boxShadow: '0 0 30px 30px rgba(239, 245, 248, 0.9)',
})

export const MediumHeading = styled.span({
  fontWeight: 800,
  fontSize: rem(18),
  lineHeight: 1.2,
  color: colors.text.blue.dark,
})

export const WideText = styled.span(
  {
    display: 'inline-block',
    padding: space.rem.md,
    color: colors.text.blue.light,
    fontWeight: 900,
    fontSize: rem(10),
    textTransform: 'uppercase',
    letterSpacing: rem(4),
  },
  ({ verticalUp, verticalDown }) => ({
    writingMode: (verticalUp || verticalDown) && 'vertical-lr',
    transform: verticalUp && 'rotate(180deg)',
  })
)

export const WideButton = styled(WideText)({
  transition: '.2s',
  ':hover': {
    color: colors.text.blue.dark,
  },
}).withComponent('button')

export const WideLink = styled(WideText)({
  transition: '.2s',
  ':hover': {
    color: colors.text.blue.dark,
  },
}).withComponent(Link)

export const CategoryLink = styled(Link)(
  {
    display: 'flex',
    alignItems: 'center',
    padding: `${rem(7)} ${rem(14)}`,
    position: 'relative',
    zIndex: 1,
    fontWeight: 800,
    fontSize: rem(14),
    borderRadius: 5,
    transition: '.2s',
    color: '#fff',
    [min(940)]: {
      color: 'inherit',
      '::before': {
        transform: 'scale(.9)',
        opacity: 0,
      },
    },
    '::before': {
      content: '""',
      display: 'block',
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: -1,
      left: 0,
      top: 0,
      borderRadius: 'inherit',
      transition: 'inherit',
    },
    ':hover': {
      color: '#fff',
      '::before': {
        opacity: 1,
        transform: 'none',
      },
    },
  },
  ({ hoverColor }) => ({ '::before': { background: hoverColor } })
)
