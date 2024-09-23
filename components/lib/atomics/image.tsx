import { styled } from "styled-components"
import { getResponsiveStyles, ResponsiveComponent, WithTheme } from "../../theme"
import { mergeStyles } from "../../theme/variants"

export type ImageProps = WithTheme<ResponsiveComponent<'img'>>

// in the future theme and variant will come into play???
export const Image = styled('img')<ImageProps>`
  ${({ theme, $variant, $sx }: ImageProps) => {
    const diff = mergeStyles({
      theme,
      $variant,
    })
    const responsive = getResponsiveStyles({
      ...diff,
      ...($sx ?? {}),
    })
    return responsive
  }}
`