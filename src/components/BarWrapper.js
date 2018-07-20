import styled from 'react-emotion'

const BarWrapper = styled.div(({ theme: { colors, space } }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  color: colors.text.blue.dark,
  padding: `${space.rem.md} ${space.rem.lg}`,
}))

export default BarWrapper
