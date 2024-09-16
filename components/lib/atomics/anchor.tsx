
// I should be using WithTheme wrapper more ubiquitously imo but
// ... will do so after getting a better sense of what the theme schema should actually be
// and specifying the theme type more rigorously 

import { styled, useTheme } from "styled-components"
import { getResponsiveStyles, ResponsiveComponent, WithTheme } from "../../theme"
import Link from '@mui/material/Link'
import { sxToStyle } from "../../utils"
export type AnchorProps = WithTheme<ResponsiveComponent<'a'>>

// in the future theme and variant will come into play???
export const Anchor = styled('a')<AnchorProps>`
  ${({ theme, $variant, $sx }: AnchorProps) => {
    const responsive = getResponsiveStyles({
      ...($sx ?? {}),
    })
    return responsive
  }}
`

export const ChimericAnchor = (props: Omit<AnchorProps, 'theme'> & {
  mui?: boolean
}) => {
  const { children, $sx, mui, ...rest} = props
  const theme = useTheme()

  if (mui) {
    return (
      <Link {...rest } style={{
        ...sxToStyle($sx ?? {}),
        ...rest.style,
      }}>
        {children}
      </Link>
    )
  }
  return (
    <Anchor {...rest} $sx={$sx} theme={theme}>
      {children}
    </Anchor>
  )
}