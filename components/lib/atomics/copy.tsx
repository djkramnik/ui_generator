import { styled, useTheme } from "styled-components"
import { getResponsiveStyles, ResponsiveComponent, WithTheme } from "../../theme"
import { Typography } from "@mui/material"
import { sxToStyle } from "../../utils"

export type CopyProps = WithTheme<ResponsiveComponent<'p'>>

// in the future theme and variant will come into play???
export const Copy = styled('p')<CopyProps>`
  ${({ theme, $variant, $sx }: CopyProps) => {
    const responsive = getResponsiveStyles({
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