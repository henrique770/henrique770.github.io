import { Sidebar } from './components/Sidebar'
import { Projects } from './components/Projects'
import { Layout } from '~/components'
import * as S from './styled'

const Home = () => (
  <Layout>
    <S.Container>
      <Sidebar />
      <Projects />
    </S.Container>
  </Layout>
)

export default Home
