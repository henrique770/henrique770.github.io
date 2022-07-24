import { Layout, Text } from '~/components'

import * as S from './styled'

const NotFound = () => {
  return (
    <Layout>
      <S.Container>
        <Text as='h1' size={56} weight={900} color='primary'>
          404
        </Text>
      </S.Container>
    </Layout>
  )
}

export default NotFound
