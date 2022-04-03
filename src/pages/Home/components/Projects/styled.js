import styled from '@emotion/styled'
import { css } from '@emotion/react'

const containerStyles = ({ theme }) => css`
  label: projects;

  @media (max-width: ${theme.breaks.xl}) {
    margin-top: ${theme.size[56]};
  }
`

const cardStyles = ({ theme }) => css`
  label: card;

  background-color: ${theme.colors.darkGray};
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

  padding: ${theme.size[16]} ${theme.size[24]} ${theme.size[40]};
`
const cardWrapperStyles = ({ theme }) => css`
  label: card__wrapper;

  display: grid;

  grid-template-columns: 310px 310px 310px 310px;
  gap: ${theme.size[40]};

  @media (max-width: ${theme.breaks.xl}) {
    grid-template-columns: 310px 310px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Container = styled('div')(containerStyles)
export const Card = styled('div')(cardStyles)
export const Image = styled('img')(imageStyles)
export const CardContent = styled('div')(cardContentStyles)
export const CardWrapper = styled('div')(cardWrapperStyles)
