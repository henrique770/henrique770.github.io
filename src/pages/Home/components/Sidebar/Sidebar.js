import React from 'react'

import profile from '~/assets/profile.jpg'

import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineCodepen
} from 'react-icons/ai'
import { fade } from '~/styles/animations'

import { Space } from '~/components'
import { motion } from 'framer-motion'
import useBreakpoints from '~/hooks/useBreakpoints'

import * as S from './styled'
import * as U from '~/styles/utils'

const Sidebar = () => {
  const { width } = useBreakpoints()

  const isMobile = width < 768

  return (
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <S.Container variants={fade}>
        <Space size={32} align='center'>
          <S.ImageWrapper>
            <S.ProfileImage>
              <img src={profile} alt='profile' />
            </S.ProfileImage>
          </S.ImageWrapper>

          <Space size={0} align='center'>
            <U.Title size={isMobile ? 32 : 40} weight={600} noMargin>
              Henrique Araújo
            </U.Title>

            <U.Text
              size={isMobile ? 16 : 24}
              weight={400}
              noMargin
              color='primary'
            >
              Front-end developer
            </U.Text>
          </Space>

          <S.IconsWrapper>
            <Space row size={16}>
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

          <Space row size={4}>
            <U.Text size={16} color='white' noMargin>
              Contact |
            </U.Text>
            <a href='mailto:henrique.1360@gmail.com'>
              <U.Text size={16} noMargin color='primary'>
                henrique.1360@gmail.com
              </U.Text>
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
