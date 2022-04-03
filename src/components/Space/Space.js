import { Children } from 'react'
import * as S from './styled'

const Space = ({ children, ...props }) => {
  const arrayChildren = Children.toArray(children)

  return (
    <S.Container {...props}>
      {Children.map(arrayChildren, (child, index) => {
        return <div key={index}>{child}</div>
      })}
    </S.Container>
  )
}

export default Space
