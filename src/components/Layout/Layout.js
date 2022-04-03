import logo from '../../assets/favicon.png'

import * as S from './styled'
import * as U from '../../styles/utils'

const Layout = ({ children }) => (
  <S.Background>
    <U.Container>
      <S.Header>
        <img src={logo} alt='logo-image' />
      </S.Header>
      {children}
    </U.Container>
  </S.Background>
)

export default Layout
