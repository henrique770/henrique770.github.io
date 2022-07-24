import React from 'react'

import profile from '~/assets/profile.jpg'

import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineCodepen
} from 'react-icons/ai'
import { fade } from '~/styles/animations'

import { Space, Text } from '~/components'
import { motion } from 'framer-motion'
import useBreakpoints from '~/hooks/useBreakpoints'

import * as S from './styled'

const Sidebar = () => {
  const { width } = useBreakpoints()

  const isMobile = width < 768

  return (
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <S.Container variants={fade}>
        <Space size={6} align='center'>
          <S.ImageWrapper>
            <S.ProfileImage>
              <img src={profile} alt='profile' />
            </S.ProfileImage>
          </S.ImageWrapper>

          <Space align='center'>
            <Text as='h1' size={isMobile ? 6 : 7} weight={600} noMargin>
              Henrique Araújo
            </Text>

            <Text size={isMobile ? 4 : 5} weight={400} noMargin color='primary'>
              Front-end developer
            </Text>
          </Space>

          <S.IconsWrapper>
            <Space row size={4}>
              <a href='https://github.com/henrique770' aria-label='github'>
                <AiOutlineGithub size={35} fill='url(#g31)' />
              </a>
              <a
                href='https://www.linkedin.com/in/henrique47/'
                aria-label='linkedin'
              >
                <AiFillLinkedin size={35} fill='url(#g31)' />
              </a>
              <a
                href='https://codepen.io/yagame/pens/public'
                aria-label='codepend'
              >
                <AiOutlineCodepen size={35} fill='url(#g31)' />
              </a>
            </Space>
          </S.IconsWrapper>

          <Space row size={1}>
            <Text size={4} color='white' noMargin>
              Contact |
            </Text>
            <a href='mailto:henrique.1360@gmail.com'>
              <Text size={4} noMargin color='primary'>
                henrique.1360@gmail.com
              </Text>
            </a>
          </Space>
        </Space>
        <svg style={{ position: 'absolute' }}>
          <linearGradient
            id='g31'
            gradientUnits='userSpaceOnUse'
            y1='400%'
            x2='100%'
          >
            <stop stopColor='#ff3939' offset='0' />
            <stop stopColor='#ef0f2c' offset='0.7' />
          </linearGradient>
        </svg>
      </S.Container>
    </motion.div>
  )
}

export default Sidebar
