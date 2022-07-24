import { theme } from '~/stitches.config'
import * as S from './styled'

const Text = props => {
  const {
    children,
    size,
    color,
    weight,
    noMargin,
    spacing,
    height,
    ...rest
  } = props

  const styles = {
    fontWeight: weight || 'normal',
    letterSpacing: spacing,
    lineHeight: height
  }

  return (
    <S.Container
      css={{
        $$size: theme.sizes[size],
        $$color: theme.colors[color],
        ...styles
      }}
      color={Boolean(color)}
      noMargin={noMargin}
      {...rest}
    >
      {children}
    </S.Container>
  )
}

export default Text
