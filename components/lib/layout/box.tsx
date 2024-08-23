import styled from 'styled-components'
import { ResponsiveComponent, WithTheme, getResponsiveStyles } from '../../theme'

export type BoxProps = WithTheme<ResponsiveComponent<'div'>>

export const Box = styled.div<BoxProps>`
  ${({ $sx={} }) => getResponsiveStyles({ ...$sx })}
`