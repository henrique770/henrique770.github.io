import { Space } from '~/components'
import { Sidebar } from './components/Sidebar'
import { Projects } from './components/Projects'
import { Layout } from '~/components'
import theme from '~/styles/theme'
import useBreakpoints from '~/hooks/useBreakpoints'
import * as S from './styled'

const Home = () => {
  const { width } = useBreakpoints()

  const isDesktop = width > 1820

  return (
    <Layout>
      <S.Container>
        <Space row={isDesktop} justify='space-between'>
          <Sidebar />
          <Projects />
        </Space>
      </S.Container>
    </Layout>
  )
}

export default Home
