import styled from 'react-emotion'
import { min } from '../styles/tools'

const LoadingBar = styled.div({
  marginBottom: 100,
  padding: 23,
  fontWeight: 800,
  fontSize: 19,
  textAlign: 'center',
  color: '#B2C7D2',
  border: 'solid 2px #DAE8F0',
  [min(940)]: {
    width: '80%',
    marginTop: -50,
    marginLeft: '20%',
    borderRadius: 10,
  },
  [min(1130)]: {
    width: '75%',
    marginLeft: '25%',
  },
})

export default LoadingBar
