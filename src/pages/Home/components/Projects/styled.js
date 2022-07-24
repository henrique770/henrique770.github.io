import { styled } from '~/stitches.config'

import { motion } from 'framer-motion'

const containerStyles = {
  '@bp4': {
    marginTop: '$9'
  }
}

const cardStyles = {
  backgroundColor: '$gray1',
  borderRadius: '$3'
}

const imageStyles = {
  height: '200px',
  width: '100%',
  objectFit: 'cover',

  borderTopLeftRadius: '$3',
  borderTopRightRadius: '$3'
}

const cardContentStyles = {
  padding: '$1 $5 $7'
}

const cardWrapperStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 310px)',
  gap: '$7',

  '@bp4': {
    gridTemplateColumns: 'repeat(3, 310px)'
  },

  '@bp3': {
    gridTemplateColumns: 'repeat(2, 310px)'
  },

  '@bp2': {
    gridTemplateColumns: '1fr'
  }
}

const tagStyles = {
  backgroundColor: '$gray2',
  borderRadius: '$1',

  width: 'fit-content',

  padding: '$2',
  marginBottom: '$2'
}

export const Container = styled('div', containerStyles)
export const Card = styled(motion.div, cardStyles)
export const Image = styled('img', imageStyles)
export const CardContent = styled('div', cardContentStyles)
export const CardWrapper = styled(motion.div, cardWrapperStyles)
export const Tag = styled('div', tagStyles)
