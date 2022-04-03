import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'

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

  background: ${theme.colors.gradient};
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

  cursor: pointer;

  svg {
    transition: all 0.5s cubic-bezier(0.25, 0.39, 0.39, 2.01);
  }

  svg:hover {
    fill: ${theme.colors.white};
    transition: all 0.5s cubic-bezier(0.25, 0.39, 0.39, 2.01);
    transform: scale(1.2);
  }
`

export const Container = styled(motion.div)(containerStyles)
export const ImageWrapper = styled('div')(imageWrapperStyles)
export const IconsWrapper = styled('div')(iconsWrapperStyles)
export const ProfileImage = styled('div')(profileImageStyles)
