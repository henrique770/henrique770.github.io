import { styled } from '~/stitches.config'

const containerStyles = {
  padding: '$5 $5 100px',
  marginLeft: 'auto',
  marginRight: 'auto',

  maxWidth: '1800px',

  '@bp4': {
    padding: '$5 $8 100px'
  },

  '@bp1': {
    padding: '$5 $4 100px'
  }
}

export const Container = styled('div', containerStyles)
