import styled from '@emotion/styled'
import { css } from '@emotion/react'

const containerStyles = ({ theme }) => css`
  label: layout;

  background-color: ${theme.colors.background};

  padding: ${theme.sizes.giga};

  height: 100vh;

  h1 {
    color: ${theme.colors.primary};
  }
`

export const Container = styled('div')(containerStyles)
