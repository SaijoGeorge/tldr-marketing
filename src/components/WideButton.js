import styled from 'react-emotion'
import WideText from './WideText'

const WideButton = styled(WideText)(({ theme: { colors } }) => ({
  transition: '.2s',
  ':hover': {
    color: colors.text.blue.dark,
  },
})).withComponent('button')

export default WideButton
