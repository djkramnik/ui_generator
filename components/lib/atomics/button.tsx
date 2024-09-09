import { styled } from "styled-components"
import { getResponsiveStyles, ResponsiveComponent, ResponsiveMixin, WithTheme } from "../../theme"
import { CSSProperties } from "react"
import { Flex, FlexProps } from "../layout"
import { Copy, CopyProps } from "./copy"

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

export const ButtonWithIcon = ({
  text,
  icon,
  bgc,
  p,
  c,
  $sx,
  $variant,
  iconStyle,
  flexProps,
}: {
  text: string
  icon: string
  bgc?: ResponsiveMixin
  p?: ResponsiveMixin
  c?: ResponsiveMixin
  $sx?: ButtonProps['$sx']
  $variant?: ButtonProps['$variant']
  iconStyle?: CSSProperties
  flexProps?: FlexProps
}) => {
  return (
    <Button 
      $variant={$variant}
      $sx={{
        backgroundColor: bgc ?? '#006f51',
        padding: p ?? '20px',
        color: c ?? '#fff',
        ...$sx,
      }}>
      <Flex aic jcsb {...flexProps} $sx={{ gap: '20px', ...flexProps?.$sx }} >
        <span>{text}</span>
        <i className={`fa-solid fa-${icon}`} style={{
          fontSize: '22px',
          ...iconStyle
        }} />
      </Flex>
    </Button>
  )
}

export const IconButton = ({
  icon,
  text,
  rev,
  iconStyle,
  textSx,
}: {
  icon: string
  text: string
  rev?: boolean
  iconStyle?: CSSProperties
  textSx?: CopyProps['$sx']
}) => {
  return (
    <Button>
      <Flex aic jcsb {...rev ? { colrev: true } : { col: true }}
        $sx={{ gap: '8px', width: '50px'}}>
        <i className={`fa-solid fa-${icon}`} style={{
          fontSize: '30px',
          ...iconStyle,
        }} />
        <Copy $sx={textSx}>{text}</Copy>
      </Flex>
    </Button>
  )
}