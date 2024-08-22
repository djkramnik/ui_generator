import React from "react"
import { styled } from "styled-components"
import { getResponsiveStyles, ResponsiveComponent, WithTheme } from "../../theme"

export type HeadingProps = WithTheme<ResponsiveComponent<'h1'>> & { level: | 1 | 2 | 3 | 4 | 5 | 6 }

export const StyledHeading = styled(
  ({ level = 3, ...rest }: HeadingProps) => {
    return React.createElement(`h${level}`, rest)
  }
)<HeadingProps>`
  ${({ theme, $variant, level = 3, $sx = {} }) => {
    return getResponsiveStyles({
      margin: '0',
      fontWeight: level < 4 ? '700' : '400',
      ...$sx,
    })
  }}
`