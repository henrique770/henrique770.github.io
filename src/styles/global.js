import { css } from '@emotion/react'

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    font-size: 62.5%;
    min-height: 100%;
    font: 16px 'Montserrat', sans-serif;
    line-height: 1.6;
  }

  button {
    line-height: 1.6;
    cursor: pointer;
  }
`

export default globalStyles
