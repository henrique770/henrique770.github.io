import styled from '@emotion/styled'
import { css } from '@emotion/react'

const containerStyles = () => css`
  label: 404;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const Container = styled('div')(containerStyles)
