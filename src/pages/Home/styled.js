import { styled } from '~/stitches.config'

const containerStyles = {
  marginTop: '150px',

  '@bp4': {
    marginTop: '$9'
  }
}

export const Container = styled('div', containerStyles)
