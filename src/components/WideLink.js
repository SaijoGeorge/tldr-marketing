import styled from 'react-emotion'
import Link from 'gatsby-link'
import WideText from './WideText'

const WideLink = styled(WideText)(({ theme: { colors } }) => ({
  transition: '.2s',
  ':hover': {
    color: colors.text.blue.dark,
  },
})).withComponent(Link)

export default WideLink
