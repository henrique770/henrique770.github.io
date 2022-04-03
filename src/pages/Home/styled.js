import styled from '@emotion/styled'
import { css } from '@emotion/react'

const containerStyles = ({ theme }) => css`
  label: home-container;

  margin-top: 150px;

  @media (max-width: ${theme.breaks.xl}) {
    margin-top: 56px;
  }
`

export const Container = styled('div')(containerStyles)
