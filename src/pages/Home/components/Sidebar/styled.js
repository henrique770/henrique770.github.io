import { styled } from '~/stitches.config'

import { motion } from 'framer-motion'

const imageWrapperStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '140px',
  height: '140px',

  borderRadius: '100%',

  background: `linear-gradient(
    126deg,
    $primary 65%,
    $orange 100%
  );`
}

const profileImageStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '130px',
  height: '130px',

  borderRadius: '100%',
  backgroundColor: '$background',

  img: {
    width: '110px',
    borderRadius: '100%'
  }
}

const iconsWrapperStyles = {
  cursor: 'pointer',

  svg: {
    transition: 'all 0.5s cubic-bezier(0.25, 0.39, 0.39, 2.01)'
  },

  'svg:hover': {
    fill: '$white',
    transition: 'all 0.5s cubic-bezier(0.25, 0.39, 0.39, 2.01)',
    transform: 'scale(1.2)'
  }
}

export const Container = styled(motion.div)
export const ImageWrapper = styled('div', imageWrapperStyles)
export const IconsWrapper = styled('div', iconsWrapperStyles)
export const ProfileImage = styled('div', profileImageStyles)
