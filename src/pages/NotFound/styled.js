import { styled } from '~/stitches.config'

const containerStyles = {
  h1: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}

export const Container = styled('div', containerStyles)
