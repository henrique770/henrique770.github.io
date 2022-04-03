import styled from '@emotion/styled'
import { css } from '@emotion/react'

const containerStyles = () => css`
  label: sidebar;
`

const imageWrapperStyles = ({ theme }) => css`
  label: sidebar__image;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 140px;
  height: 140px;

  border-radius: 100%;
  background-color: ${theme.colors.primary};
`

const profileImageStyles = ({ theme }) => css`
  label: sidebar__profile-image;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 130px;
  height: 130px;

  border-radius: 100%;
  background-color: ${theme.colors.background};

  img {
    width: 110px;
    border-radius: 100%;
  }
`

const iconsWrapperStyles = ({ theme }) => css`
  label: sidebar__icons-wrapper;

  svg {
    color: ${theme.colors.primary};
  }
`

export const Container = styled('div')(containerStyles)
export const ImageWrapper = styled('div')(imageWrapperStyles)
export const IconsWrapper = styled('div')(iconsWrapperStyles)
export const ProfileImage = styled('div')(profileImageStyles)
