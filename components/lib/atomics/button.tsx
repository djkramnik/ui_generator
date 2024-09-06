import { styled } from "styled-components"
import { getResponsiveStyles, ResponsiveComponent, WithTheme } from "../../theme"

export type ButtonProps = WithTheme<ResponsiveComponent<'button'>>

// in the future theme and variant will come into play???

// the default styles I include in button should later get ported to theme under theme.component.button
export const Button = styled('button')<ButtonProps>`
  ${({ theme, $variant, $sx }: ButtonProps) => {
    const responsive = getResponsiveStyles({
      // default styles??? theme???
      ...(
        $variant === "pill"
          ? {
            backgroundColor: '#fff',
            color: '#333',
            borderRadius: '24px',
            fontWeight: '700',
            padding: '12px 18px'
          }
          : undefined
      ),
      ...($sx ?? {}),
    })
    return responsive
  }}
`