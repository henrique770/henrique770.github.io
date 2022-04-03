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
    font: 16px 'Roboto', sans-serif;
    line-height: 1.4;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #3c4142;
    border: 0px none #111;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #3c4142;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #3c4142;
  }
  ::-webkit-scrollbar-track {
    background: #111;
    border: 0px none #111;
  }
  ::-webkit-scrollbar-track:hover {
    background: #111;
  }
  ::-webkit-scrollbar-track:active {
    background: #111;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`

export default globalStyles
