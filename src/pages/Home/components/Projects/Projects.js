import { projects } from './constants'
import { Space } from '~/components'
import useBreakpoints from '~/hooks/useBreakpoints'

import * as S from './styled'
import * as U from '~/styles/utils'

const Projects = () => {
  const { width } = useBreakpoints()

  return (
    <S.Container>
      <Space
        size={40}
        justify={width < 1820 && 'center'}
        align={width < 1820 && 'center'}
      >
        <U.Title size={48} weight={600} noMargin>
          Projects
        </U.Title>

        <S.CardWrapper>
          {projects.map(({ image, name, tags, description }, index) => (
            <S.Card key={index}>
              <S.Image src={image} alt={name} />
              <S.CardContent>
                <Space size={12}>
                  <U.Title size={24} weight={500} noMargin gradient>
                    {name}
                  </U.Title>
                  <Space row size={8} wrap='wrap'>
                    {tags.map(tag => (
                      <S.Tag>
                        <U.Text noMargin size={12} spacing='0.2px'>
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
