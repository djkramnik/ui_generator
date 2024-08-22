import { styled } from "styled-components"
import { getResponsiveStyles, ResponsiveComponent, WithTheme } from "../../theme"

export type ButtonProps = WithTheme<ResponsiveComponent<'button'>>

// in the future theme and variant will come into play???

// the default styles I include in button should later get ported to theme under theme.component.button
export const Button = styled('button')<ButtonProps>`
  ${({ theme, $variant, $sx }: ButtonProps) => {
    const responsive = getResponsiveStyles({
      // default styles???
      ...($sx ?? {}),
    })
    return responsive
  }}
`