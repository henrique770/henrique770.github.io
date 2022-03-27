import { Sidebar } from './components/Sidebar'
import { Projects } from './components/Projects'
import { Layout } from '../../components/Layout'

const Home = () => (
  <Layout>
    <Sidebar />
    <Projects />
  </Layout>
)

export default Home
