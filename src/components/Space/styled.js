import { styled, css } from '~/stitches.config'

const spaceStyles = css({
  display: 'flex',
  flexDirection: 'column',

  '& > div:not(:last-child)': {
    marginBottom: '$$size'
  },

  variants: {
    row: {
      true: {
        flexDirection: 'row',

        '& > div:not(:last-child)': {
          marginRight: '$$size',
          marginBottom: '0'
        }
      }
    }
  }
})

export const Container = styled('div', spaceStyles)
