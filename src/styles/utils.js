import styled from '@emotion/styled'
import { css } from '@emotion/react'

const containerStyles = ({ theme }) => css`
  label: container;

  padding: ${theme.size[24]} ${theme.size[24]} 100px;
  margin-left: auto;
  margin-right: auto;

  max-width: 1800px;
`

const baseTextStyles = ({
  theme,
  size,
  color,
  weight,
  noMargin,
  spacing,
  height
}) => css`
  label: text;

  font-size: ${theme.size[size]};
  font-weight: ${weight ? weight : 'normal'};

  color: ${color ? theme.colors[color] : theme.colors.white};

  margin-bottom: ${!noMargin && theme.size[16]};

  letter-spacing: ${spacing && spacing};
  line-height: ${height && height};
`

const gradientTextStyles = ({ theme, gradient }) =>
  gradient &&
  css`
    label: text--gradient;

    background: ${theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `

export const Container = styled('div')(containerStyles)
export const Title = styled('h1')(baseTextStyles, gradientTextStyles)
export const Text = styled('p')(baseTextStyles, gradientTextStyles)
