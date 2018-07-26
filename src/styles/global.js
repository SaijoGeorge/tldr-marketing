import { injectGlobal } from 'emotion'
import theme from './theme'

import './minireset.css'

injectGlobal`
  body {
    font-family: Nunito, sans-serif;
    background-color: ${theme.colors.bg.blue.light};
  }
`
