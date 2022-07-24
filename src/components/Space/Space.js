import { Children } from 'react'
import { theme } from '~/stitches.config'
import * as S from './styled'

const Space = props => {
  const { children, size, row, align, justify, wrap, ...rest } = props

  const arrayChildren = Children.toArray(children)

  const styles = {
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap
  }

  return (
    <S.Container
      css={{
        $$size: theme.space[size],
        $$row: row,
        ...styles
      }}
      row={row}
      {...rest}
    >
      {Children.map(arrayChildren, (child, index) => {
        return <div key={index}>{child}</div>
      })}
    </S.Container>
  )
}

export default Space
