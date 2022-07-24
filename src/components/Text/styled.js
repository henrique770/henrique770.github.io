import { styled, css } from '~/stitches.config'

const textStyles = css({
  fontSize: '$$size',
  color: '$white',
  marginBottom: '$4',

  variants: {
    color: {
      true: {
        color: '$$color'
      }
    },
    noMargin: {
      true: {
        marginBottom: 0
      }
    },
    gradient: {
      true: {
        background: '$gradient',
        'background-clip': 'text',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      }
    }
  },
  defaultVariants: {
    color: '$white'
  }
})

export const Container = styled('p', textStyles)
