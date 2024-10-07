import styled from 'styled-components'
import { ResponsiveComponent, WithTheme, getResponsiveStyles } from '../../theme'
import { mergeStyles } from '../../theme/variants'

export type BoxProps = WithTheme<ResponsiveComponent<'div'>>
export type SpanProps = WithTheme<ResponsiveComponent<'span'>>

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

export const Span = styled.span<SpanProps>`
  ${
    ({ $sx={}, $variant, theme }) => {
      const diff = mergeStyles({
        theme,
        $variant,
        component: 'span'
      })
      return getResponsiveStyles({ ...diff, ...$sx })
    }
  }
`