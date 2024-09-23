// I should be using WithTheme wrapper more ubiquitously imo but
// ... will do so after getting a better sense of what the theme schema should actually be
// and specifying the theme type more rigorously

import { styled, useTheme } from 'styled-components'
import {
  getResponsiveStyles,
  ResponsiveComponent,
  WithTheme,
} from '../../theme'
import Link from '@mui/material/Link'
import {
  mergeStyles,
  sxToStyle,
} from "../../theme/variants"
export type AnchorProps = WithTheme<ResponsiveComponent<'a'>>

// in the future theme and variant will come into play???
export const Anchor = styled('a')<AnchorProps>`
  ${({ theme, $variant, $sx }: AnchorProps) => {
    const diff = mergeStyles({
      theme,
      component: 'link',
      $variant,
    })
    const responsive = getResponsiveStyles({
      ...diff,
      ...($sx ?? {}),
    })
    return responsive
  }}
`

export const ChimericAnchor = (
  props: Omit<AnchorProps, 'theme'> & {
    mui?: boolean
  }
) => {
  const { children, $sx, mui, $variant, ...rest } = props
  const theme = useTheme()

  if (mui) {
    const diff = mergeStyles({
      theme,
      component: 'link',
      $variant,
    })
    return (
      <Link
        {...rest}
        style={{
          ...sxToStyle(diff),
          ...sxToStyle($sx ?? {}),
          ...rest.style,
        }}
      >
        {children}
      </Link>
    )
  }
  return (
    <Anchor $variant={$variant} {...rest} $sx={$sx} theme={theme}>
      {children}
    </Anchor>
  )
}
