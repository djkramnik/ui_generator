import React from "react"
import { styled, useTheme } from "styled-components"
import { getResponsiveStyles, ResponsiveComponent, WithTheme } from "../../theme"
import { Typography } from "@mui/material"
import { getComponentStyles, mergeStyles, sxToStyle } from "../../utils"

export type HeadingProps = WithTheme<ResponsiveComponent<'h1'>> & { level: | 1 | 2 | 3 | 4 | 5 | 6 }

export const Heading = styled(
  ({ level = 3, ...rest }: HeadingProps) => {
    return React.createElement(`h${level}`, rest)
  }
)<HeadingProps>`
  ${({ theme, $variant, level = 3, $sx = {} }) => {
    const diff = mergeStyles({
      theme,
      component: 'heading',
      $variant,
    })
    const levelDiff = getComponentStyles(`h${level}`, theme)
    
    return getResponsiveStyles({
      ...diff,
      ...levelDiff,
      ...$sx,
    })
  }}
`

export const ChimericHeading = (props: Omit<HeadingProps, 'theme'> & {
  mui?: boolean
}) => {
  const theme = useTheme()

  const { children, $sx, mui, level, ...rest } = props
  if (mui) {
    const diff = mergeStyles({
      theme,
      component: 'heading',
      $variant: props.$variant,
    })
    const levelDiff = getComponentStyles(`h${level}`, theme)

    return (
      <Typography variant={`h${level}`}
        style={{
          ...sxToStyle({...diff, ...levelDiff}),
          ...sxToStyle($sx ?? {}),
          ...rest.style,
        }}>
        {children}
      </Typography>
    )
  }
  return (
    <Heading level={level} $sx={$sx} theme={theme} {...rest}>
      {children}
    </Heading>
  )
}