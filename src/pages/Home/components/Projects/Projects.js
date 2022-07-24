import { projects } from './constants'
import { Space, Text } from '~/components'
import useBreakpoints from '~/hooks/useBreakpoints'
import { container, item } from '~/styles/animations'

import * as S from './styled'

const Projects = () => {
  const { width } = useBreakpoints()

  return (
    <S.Container>
      <Space
        size={7}
        justify={width < 1440 && 'center'}
        align={width < 1440 && 'center'}
      >
        <Text as='h1' size={8} weight={600} noMargin>
          Projects
        </Text>

        <S.CardWrapper
          variants={container}
          initial='hidden'
          animate='show'
          exit='exit'
        >
          {projects.map(({ image, name, tags, description, link }, index) => (
            <S.Card
              key={index}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 1 }}
              variants={item}
            >
              <a href={link} aria-label={name} target='_blank' rel='noreferrer'>
                <S.Image src={image} alt={name} />
              </a>
              <S.CardContent>
                <Space size={3}>
                  <a
                    href={link}
                    aria-label={name}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Text as='h1' size={5} weight={500} noMargin gradient>
                      {name}
                    </Text>
                  </a>
                  <Space row size={2} wrap='wrap'>
                    {tags.map((tag, index) => (
                      <S.Tag key={index}>
                        <Text noMargin size={3} spacing='0.2px' height={1}>
                          {tag}
                        </Text>
                      </S.Tag>
                    ))}
                  </Space>

                  <Text size={4} weight={400} color='gray' noMargin>
                    {description}
                  </Text>
                </Space>
              </S.CardContent>
            </S.Card>
          ))}
        </S.CardWrapper>
      </Space>
    </S.Container>
  )
}

export default Projects
