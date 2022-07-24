import { createStitches } from '@stitches/react'

export const { styled, css, keyframes, theme, globalCss } = createStitches({
  theme: {
    colors: {
      background: '#111',
      primary: '#ef0f2c',
      secondary: '#f7586d',
      white: '#ffffff',
      gray: '#888888',
      gray1: '#181818',
      gray2: '#292929',
      orange: '#ff5e00',
      gradient: 'linear-gradient(90deg, #ef0f2c 0%, #ff5e00 100%)'
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '40px',
      8: '48px',
      9: '56px'
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '40px',
      8: '48px',
      9: '56px'
    },
    radii: {
      1: '4px',
      2: '8px',
      3: '12px'
    }
  },
  media: {
    bp1: '(max-width: 350px)',
    bp2: '(max-width: 768px)',
    bp3: '(max-width: 1170px)',
    bp4: '(max-width: 1820px)'
  },
  utils: {
    size: value => ({
      width: value,
      height: value
    })
  }
})


