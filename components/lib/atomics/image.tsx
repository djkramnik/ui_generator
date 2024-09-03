import { styled } from "styled-components"
import { getResponsiveStyles, ResponsiveComponent, WithTheme } from "../../theme"

export type ImageProps = WithTheme<ResponsiveComponent<'img'>>

// in the future theme and variant will come into play???
export const Image = styled('img')<ImageProps>`
  ${({ theme, $variant, $sx }: ImageProps) => {
    const responsive = getResponsiveStyles({
      ...($sx ?? {}),
    })
    return responsive
  }}
`