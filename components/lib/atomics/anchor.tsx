
// I should be using WithTheme wrapper more ubiquitously imo but
// ... will do so after getting a better sense of what the theme schema should actually be
// and specifying the theme type more rigorously 

import { styled } from "styled-components"
import { getResponsiveStyles, ResponsiveComponent, WithTheme } from "../../theme"

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