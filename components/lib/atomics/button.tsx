import { styled, useTheme } from "styled-components"
import { CssProps, getResponsiveStyles, ResponsiveComponent, ResponsiveMixin, WithTheme } from "../../theme"
import { CSSProperties } from "react"
import { Flex, FlexProps } from "../layout"
import { Copy, CopyProps } from "./copy"
import { Button as MuiButton } from "@mui/material"
import { sxToStyle } from "../../utils"
import { toMuiIcon } from "./icon"

export type ButtonProps = WithTheme<ResponsiveComponent<'button'>>

const pillVariant: CssProps = {
  borderRadius: '24px',
  fontWeight: '700',
  padding: '12px 18px'
}

// the default styles I include in button should later get ported to theme under theme.component.button
export const Button = styled('button')<ButtonProps>`
  ${({ theme, $variant, $sx }: ButtonProps) => {
    const responsive = getResponsiveStyles({
      // default styles??? theme???
      ...(
        $variant === "pill"
          ? pillVariant
          : undefined
      ),
      ...($sx ?? {}),
    })
    return responsive
  }}
`

export const ChimericButton = (props: Omit<ButtonProps, 'theme'> & {
  mui?: boolean
}) => {
  const theme = useTheme()
  const {children, $sx, mui, $variant, ...rest} = props
  if (mui) {
    return (
      <MuiButton 
        
      style={{
        ...sxToStyle($sx ?? {}),
        ...rest.style,
        ...($variant === "pill" ? sxToStyle(pillVariant) : {})
      }}>
        {children}
      </MuiButton>
    )
  }
  return (
    <Button $sx={$sx} {...rest} theme={theme}>
      {children}
    </Button>
  )
}

type ButtonWithIconProps = {
  text: string
  icon: string
  bgc?: ResponsiveMixin
  p?: ResponsiveMixin
  c?: ResponsiveMixin
  $sx?: ButtonProps['$sx']
  $variant?: ButtonProps['$variant']
  iconStyle?: CSSProperties
  flexProps?: FlexProps
}

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
} : ButtonWithIconProps) => {
  return (
    <Button 
      $variant={$variant}
      $sx={{
        backgroundColor: bgc,
        padding: p,
        color: c,
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

export const ChimericButtonWithIcon = (props: ButtonWithIconProps & {
  mui?: boolean
}) => {
  const Icon = () => <i className={`fa-solid fa-${props.icon}`} style={{
    fontSize: '22px',
    ...props.iconStyle
  }} />
  const { text, mui, $sx, $variant, ...rest } = props

  if (mui) {
    return (
      <MuiButton startIcon={<Icon />}
        style={{
          ...(
            typeof props.bgc === 'string'
              ? {
                backgroundColor: props.bgc,
              }
              : {}
          ),
          ...(
            typeof props.p === 'string'
              ? {
                padding: props.p,
              }
              : {}
          ),
          ...(
            typeof props.c === 'string'
              ? {
                color: props.c,
              }
              : {}
          ),
          ...sxToStyle($sx ?? {}),
          ...($variant === "pill" ? sxToStyle(pillVariant) : {})
        }}>
        {text}
      </MuiButton>
    )
  }
  return (
    <ButtonWithIcon text={text} $sx={$sx} $variant={$variant} {...rest} />
  )
}

export const IconButton = ({
  icon,
  text,
  rev,
  iconStyle,
  textSx,
  mui,
}: {
  icon: string
  text: string
  rev?: boolean
  iconStyle?: CSSProperties
  textSx?: CopyProps['$sx']
  mui?: boolean
}) => {
  const AltMuiIcon = toMuiIcon(icon as any)
  return (
    <Button>
      <Flex aic jcsb {...rev ? { colrev: true } : { col: true }}
        $sx={{ gap: '8px', width: '50px'}}>
          {
            mui
              ? (
                <AltMuiIcon style={{ ...iconStyle }} />
              )
              : (
                <i className={`fa-solid fa-${icon}`} style={{
                  fontSize: '30px',
                  ...iconStyle,
                }} />
              )
          }
        <Copy $sx={textSx}>{text}</Copy>
      </Flex>
    </Button>
  )
}