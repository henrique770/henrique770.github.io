import React from 'react'

import profile from '~/assets/profile.jpg'

import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineCodepen
} from 'react-icons/ai'

import { Space } from '~/components'

import useBreakpoints from '~/hooks/useBreakpoints'

import * as S from './styled'
import * as U from '~/styles/utils'

const Sidebar = () => {
  const { width } = useBreakpoints()

  const isMobile = width < 768

  return (
    <S.Container>
      <Space size={32} align='center'>
        <S.ImageWrapper>
          <S.ProfileImage>
            <img src={profile} alt='profile' />
          </S.ProfileImage>
        </S.ImageWrapper>

        <Space size={8} align='center'>
          <U.Title size={isMobile ? 32 : 40} weight={600} noMargin>
            Henrique Araújo
          </U.Title>

          <U.Text size={isMobile ? 16 : 24} weight={400} noMargin gradient>
            Front-end developer
          </U.Text>
        </Space>

        <S.IconsWrapper>
          <Space row size={16}>
            <AiOutlineGithub size={35} fill='url(#g31)' />
            <AiOutlineTwitter size={37} fill='url(#g31)' />

            <AiFillLinkedin size={35} fill='url(#g31)' />
            <AiOutlineCodepen size={35} fill='url(#g31)' />
          </Space>
        </S.IconsWrapper>

        <Space row size={4}>
          <U.Text size={16} color='white' noMargin>
            Contact |
          </U.Text>
          <U.Text size={16} noMargin color='primary' gradient weight={600}>
            henrique.1360@gmail.com
          </U.Text>
        </Space>
      </Space>
      <svg style={{ position: 'absolute' }}>
        <linearGradient
          id='g31'
          gradientUnits='userSpaceOnUse'
          y1='100%'
          x2='400%'
        >
          <stop stop-color='#ef0f2c' offset='0' />
          <stop stop-color='#ff3939' offset='0.7' />
        </linearGradient>
      </svg>
    </S.Container>
  )
}

export default Sidebar
