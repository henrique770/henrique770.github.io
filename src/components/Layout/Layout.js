import logo from '~/assets/favicon.png'
import { Link } from 'react-router-dom'

import * as S from './styled'
import * as U from '~/styles/utils'

const Layout = ({ children }) => {
  return (
    <S.Background>
      <U.Container>
        <S.Header>
          <Link to='/'>
            <img src={logo} alt='logo-image' />
          </Link>
        </S.Header>
        {children}
      </U.Container>
    </S.Background>
  )
}

export default Layout
