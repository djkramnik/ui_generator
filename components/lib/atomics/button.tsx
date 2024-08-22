import { styled } from "styled-components"
import { getResponsiveStyles, ResponsiveComponent, WithTheme } from "../../theme"

export type ButtonProps = WithTheme<ResponsiveComponent<'button'>>

// in the future theme and variant will come into play???
export const Button = styled('button')`
  ${({ theme, $variant, $sx }: ButtonProps) => {
    const responsive = getResponsiveStyles({
      ...($sx ?? {}),
    })
    return responsive
  }}
`