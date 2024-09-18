import React from "react"
import { styled, useTheme } from "styled-components"
import { getResponsiveStyles, ResponsiveComponent, WithTheme } from "../../theme"
import { Typography } from "@mui/material"
import { getComponentStyles, parseVariant, parseVariants, sxToStyle } from "../../utils"

export type HeadingProps = WithTheme<ResponsiveComponent<'h1'>> & { level: | 1 | 2 | 3 | 4 | 5 | 6 }

export const Heading = styled(
  ({ level = 3, ...rest }: HeadingProps) => {
    return React.createElement(`h${level}`, rest)
  }
)<HeadingProps>`
  ${({ theme, $variant, level = 3, $sx = {} }) => {
    const variantDiff = typeof $variant === 'string'
      ? parseVariant($variant, theme)
      : (
        Array.isArray($variant)
          ? parseVariants($variant, theme)
          : {}
      )

    const componentDiff = getComponentStyles('heading', theme)
    const levelDiff = getComponentStyles(`h${level}`, theme)
    
    return getResponsiveStyles({
      color: theme.palette.heading,
      ...componentDiff,
      ...levelDiff,
      ...variantDiff,
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
    const variantDiff = typeof props.$variant === 'string'
      ? parseVariant(props.$variant, theme)
      : (
        Array.isArray(props.$variant)
          ? parseVariants(props.$variant, theme)
          : {}
      )
  
    const componentDiff = getComponentStyles('heading', theme)
    const levelDiff = getComponentStyles(`h${level}`, theme)
    const diff = sxToStyle({
      ...componentDiff,
      ...levelDiff,
      ...variantDiff,
    })
    return (
      <Typography variant={`h${level}`}
        style={{
          ...diff,
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