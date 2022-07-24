import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  '*': {
    margin: '0',
    padding: '0',
    outline: '0',
    boxSizing: 'border-box'
  },

  'html, body, #root': {
    fontSize: '62.5%',
    minHeight: '100%',
    font: '16px Roboto, sans-serif',
    lineHeight: '1.4'
  },

  a: {
    textDecoration: 'none'
  },

  '::-webkit-scrollbar': {
    width: '7px',
    height: '7px'
  },

  '::-webkit-scrollbar-button': {
    width: '0px',
    height: '0px'
  },
  '::-webkit-scrollbar-thumb': {
    background: '#3c4142',
    border: '0px none #111',
    borderRadius: '50px'
  },

  '::-webkit-scrollbar-thumb:hover': {
    background: '#3c4142'
  },

  '::-webkit-scrollbar-thumb:active': {
    background: '#3c4142'
  },

  '::-webkit-scrollbar-track': {
    background: '#111',
    border: '0px none #111'
  },

  '::-webkit-scrollbar-track:hover': {
    background: '#111'
  },

  '::-webkit-scrollbar-track:active': {
    background: '#111'
  },

  '::-webkit-scrollbar-corner': {
    background: 'transparent'
  }
})
