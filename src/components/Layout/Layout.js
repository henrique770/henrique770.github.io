import logo from '~/assets/favicon.png'
import { Link } from 'react-router-dom'

import * as S from './styled'

const Layout = ({ children }) => {
  return (
    <S.Background>
      <S.Container>
        <S.Header>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </S.Header>
        {children}
      </S.Container>
    </S.Background>
  )
}

export default Layout
