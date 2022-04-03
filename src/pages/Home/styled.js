import styled from '@emotion/styled'
import { css } from '@emotion/react'

const containerStyles = () => css`
  label: home-container;

  display: flex;

  margin-top: 200px;
`

export const Container = styled('div')(containerStyles)
