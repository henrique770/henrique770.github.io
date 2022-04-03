import { Layout } from '~/components'

import * as S from './styled'
import * as U from '~/styles/utils'

const NotFound = () => {
  return (
    <Layout>
      <S.Container>
        <U.Title size={56} weight={900} color='primary'>
          404
        </U.Title>
      </S.Container>
    </Layout>
  )
}

export default NotFound
