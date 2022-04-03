import { projects } from './constants'
import { Space } from '~/components'
import useBreakpoints from '~/hooks/useBreakpoints'
import { container, item } from '~/styles/animations'

import * as S from './styled'
import * as U from '~/styles/utils'

const Projects = () => {
  const { width } = useBreakpoints()

  return (
    <S.Container>
      <Space
        size={40}
        justify={width < 1440 && 'center'}
        align={width < 1440 && 'center'}
      >
        <U.Title size={48} weight={600} noMargin>
          Projects
        </U.Title>

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
              <a
                href={link}
                aria-label={name}
                target='_blank'
                without
                rel='noreferrer'
              >
                <S.Image src={image} alt={name} />
              </a>
              <S.CardContent>
                <Space size={12}>
                  <a
                    href={link}
                    aria-label={name}
                    target='_blank'
                    without
                    rel='noreferrer'
                  >
                    <U.Title size={24} weight={500} noMargin gradient>
                      {name}
                    </U.Title>
                  </a>
                  <Space row size={8} wrap='wrap'>
                    {tags.map((tag, index) => (
                      <S.Tag key={index}>
                        <U.Text noMargin size={12} spacing='0.2px' height={1}>
                          {tag}
                        </U.Text>
                      </S.Tag>
                    ))}
                  </Space>

                  <U.Text size={16} weight={400} color='gray' noMargin>
                    {description}
                  </U.Text>
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
