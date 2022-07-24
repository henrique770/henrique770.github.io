import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import { globalStyles } from './styles/global'

const App = () => {
  globalStyles()

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
