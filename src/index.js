import React from 'react'
import ReactDOM from 'react-dom'
import { Global, ThemeProvider } from '@emotion/react'
import globalStyles from './styles/global'
import theme from './styles/theme'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
