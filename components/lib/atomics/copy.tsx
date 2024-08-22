import { styled } from "styled-components"
import { getResponsiveStyles, ResponsiveComponent, WithTheme } from "../../theme"

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