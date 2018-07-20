import { injectGlobal } from 'emotion'
import theme from './theme'

injectGlobal`
  body {
    font-family: Nunito, sans-serif;
    background-color: ${theme.colors.bg.blue.light};
  }
`
