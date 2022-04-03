import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'

const containerStyles = ({ theme }) => css`
  label: projects;

  @media (max-width: ${theme.breaks.xl}) {
    margin-top: ${theme.size[56]};
  }
`

const cardStyles = ({ theme }) => css`
  label: card;

  background-color: ${theme.colors.gray1};
  border-radius: ${theme.size[12]};
`

const imageStyles = ({ theme }) => css`
  label: card__image;

  height: 200px;
  width: 100%;
  object-fit: cover;

  border-top-left-radius: ${theme.size[12]};
  border-top-right-radius: ${theme.size[12]};
`

const cardContentStyles = ({ theme }) => css`
  label: card__content;

  padding: ${theme.size[4]} ${theme.size[24]} ${theme.size[40]};
`

const cardWrapperStyles = ({ theme }) => css`
  label: card__wrapper;

  display: grid;

  grid-template-columns: repeat(4, 310px);
  gap: ${theme.size[40]};

  @media (max-width: ${theme.breaks.xl}) {
    grid-template-columns: repeat(3, 310px);
  }

  @media (max-width: ${theme.breaks.l}) {
    grid-template-columns: repeat(2, 310px);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const tagStyles = ({ theme }) => css`
  label: card__tag;

  background-color: ${theme.colors.gray2};
  border-radius: ${theme.size[4]};

  width: fit-content;

  padding: ${theme.size[8]};
`

export const Container = styled('div')(containerStyles)
export const Card = styled(motion.div)(cardStyles)
export const Image = styled('img')(imageStyles)
export const CardContent = styled('div')(cardContentStyles)
export const CardWrapper = styled(motion.div)(cardWrapperStyles)
export const Tag = styled('div')(tagStyles)
