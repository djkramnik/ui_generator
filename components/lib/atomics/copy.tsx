import { styled, useTheme } from "styled-components"
import { getResponsiveStyles, ResponsiveComponent, WithTheme } from "../../theme"
import { Typography } from "@mui/material"
import { mergeStyles, sxToStyle } from "../../theme/variants"

export type CopyProps = WithTheme<ResponsiveComponent<'p'>>

export const Copy = styled('p')<CopyProps>`
  ${({ theme, $variant, $sx }: CopyProps) => {
    const diff = mergeStyles({
      theme,
      component: 'copy',
      $variant,
    })

    const responsive = getResponsiveStyles({
      ...diff,
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
    const diff = mergeStyles({
      theme,
      component: 'copy',
      $variant: props.$variant,
    })
    return (
      <Typography style={{
        ...sxToStyle(diff),
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