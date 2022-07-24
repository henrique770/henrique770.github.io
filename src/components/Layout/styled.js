import { styled } from '~/stitches.config'

const backgroundStyles = {
  label: 'layout',
  backgroundColor: '$background',
  minHeight: '100vh'
}

const headerStyles = {
  label: 'layout__header',

  display: 'flex',

  '& img': {
    width: '$7',
    cursor: 'pointer'
  }
}

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

export const Background = styled('div', backgroundStyles)
export const Header = styled('div', headerStyles)
export const Container = styled('div', containerStyles)
