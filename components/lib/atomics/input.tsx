import { styled } from "styled-components"
import { getResponsiveStyles, ResponsiveComponent, WithTheme } from "../../theme"

export type InputProps = WithTheme<ResponsiveComponent<'input'>>

// in the future theme and variant will come into play???
export const Input = styled('img')<InputProps>`
  ${({ theme, $variant, $sx }: InputProps) => {
    const responsive = getResponsiveStyles({
      ...($sx ?? {}),
    })
    return responsive
  }}
`