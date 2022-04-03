import styled from '@emotion/styled'
import { css } from '@emotion/react'

const containerStyles = () => css`
  label: projects;
`

const cardStyles = () => css`
  label: projects__card;
`

export const Container = styled('div')(containerStyles)
export const Card = styled('div')(cardStyles)
