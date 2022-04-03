import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <AppRoutes />
  </BrowserRouter>
)

export default App
