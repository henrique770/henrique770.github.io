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

export const Background = styled('div', backgroundStyles)
export const Header = styled('div', headerStyles)
