import { styled } from "styled-components"
import { getResponsiveStyles, ResponsiveComponent, WithTheme } from "../../theme"
import { parseVariant, parseVariants } from "../../utils"

export type ImageProps = WithTheme<ResponsiveComponent<'img'>>

// in the future theme and variant will come into play???
export const Image = styled('img')<ImageProps>`
  ${({ theme, $variant, $sx }: ImageProps) => {
    const variantDiff = typeof $variant === 'string'
      ? parseVariant($variant, theme)
      : (
        Array.isArray($variant)
          ? parseVariants($variant, theme)
          : {}
      )
    const responsive = getResponsiveStyles({
      ...variantDiff,
      ...($sx ?? {}),
    })
    return responsive
  }}
`