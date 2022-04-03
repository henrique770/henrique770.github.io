import styled from '@emotion/styled'
import { css } from '@emotion/react'

const baseStyles = ({ theme, size = '24' }) => css`
  label: space;

  display: flex;
  flex-direction: column;

  & > div:not(:last-child) {
    margin-bottom: ${theme.size[size]};
  }
`

const rowStyles = ({ theme, size, row }) =>
  row &&
  css`
    label: space--row;

    flex-direction: row;

    & > div:not(:last-child) {
      margin-right: ${theme.size[size]};
      margin-bottom: 0;
    }
  `

const alignStyles = ({ align }) => {
  if (!align) {
    return null
  }

  return css`
    label: ${`space--align-${align}`};

    align-items: ${align};
  `
}

const justifyStyles = ({ justify }) => {
  if (!justify) {
    return null
  }

  return css`
    label: ${`space--justify-${justify}`};

    justify-content: ${justify};
  `
}

const wrapStyles = ({ wrap }) => {
  if (!wrap) {
    return null
  }

  return css`
    label: ${`space--wrap`};

    flex-wrap: ${wrap};
  `
}

export const Container = styled('div')(
  baseStyles,
  rowStyles,
  alignStyles,
  justifyStyles,
  wrapStyles
)
