import styled from '@emotion/styled'
import { css } from '@emotion/react'

const backgroundStyles = ({ theme }) => css`
  label: layout;

  background-color: ${theme.colors.background};

  min-height: 100vh;
`

const headerStyles = ({ theme }) => css`
  label: layout__header;

  display: flex;

  img {
    width: ${theme.size[40]};
  }
`

export const Background = styled('div')(backgroundStyles)
export const Header = styled('div')(headerStyles)
