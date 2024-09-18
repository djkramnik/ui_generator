import { styled, useTheme } from "styled-components"
import { getResponsiveStyles, ResponsiveComponent, WithTheme } from "../../theme"
import { Typography } from "@mui/material"
import { parseVariant, parseVariants, sxToStyle } from "../../utils"

export type CopyProps = WithTheme<ResponsiveComponent<'p'>>

export const Copy = styled('p')<CopyProps>`
  ${({ theme, $variant, $sx }: CopyProps) => {
    const variantDiff = typeof $variant === 'string'
      ? parseVariant($variant, theme)
      : (
        Array.isArray($variant)
          ? parseVariants($variant, theme)
          : {}
      )

    const responsive = getResponsiveStyles({
      color: theme.palette.copy,
      backgroundColor: theme.palette.primary,
      ...variantDiff,
      ...($sx ?? {}),
    })
    return responsive
  }}
`

export const ChimericCopy = (props: Omit<CopyProps, 'theme'> & {
  mui?: boolean
}) => {
  const theme = useTheme()
  const { children, $sx, mui, ...rest} = props
  if (mui) {
    return (
      <Typography style={{
        ...sxToStyle($sx ?? {}),
        ...rest.style,
      }}>
        {children}
      </Typography>
    )
  }
  return (
    <Copy $sx={$sx} theme={theme} {...rest}>
      {children}
    </Copy>
  )
}