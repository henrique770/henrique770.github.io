import React from 'react'

import profile from '~/assets/profile.jpg'

import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillFilePdf,
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

          <U.Text
            size={isMobile ? 16 : 24}
            weight={400}
            color='primary'
            noMargin
          >
            Front-end developer
          </U.Text>
        </Space>

        <S.IconsWrapper>
          <Space row size={16}>
            <AiOutlineGithub size={35} />
            <AiOutlineTwitter size={37} />
            <AiFillFilePdf size={33} />
            <AiFillLinkedin size={35} />
            <AiOutlineCodepen size={35} />
          </Space>
        </S.IconsWrapper>

        <Space row size={4}>
          <U.Text size={16} color='white' noMargin>
            Contact |
          </U.Text>
          <U.Text size={16} color='primary' noMargin>
            henrique.1360@gmail.com
          </U.Text>
        </Space>
      </Space>
    </S.Container>
  )
}

export default Sidebar
