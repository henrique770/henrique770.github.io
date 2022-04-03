import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global, ThemeProvider } from '@emotion/react'
import globalStyles from './styles/global'
import theme from './styles/theme'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <App />
  </ThemeProvider>
)
