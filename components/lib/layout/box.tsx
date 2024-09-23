import styled from 'styled-components'
import { ResponsiveComponent, WithTheme, getResponsiveStyles } from '../../theme'
import { mergeStyles } from '../../theme/variants'

export type BoxProps = WithTheme<ResponsiveComponent<'div'>>

export const Box = styled.div<BoxProps>`
  ${
    ({ $sx={}, $variant, theme }) => {
      const diff = mergeStyles({
        theme,
        $variant,
      })
      return getResponsiveStyles({ ...diff, ...$sx })
    }
  }
`