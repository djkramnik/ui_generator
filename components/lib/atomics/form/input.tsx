import { CSSProperties, styled, useTheme } from "styled-components"
import { CssProps, getResponsiveStyles, ResponsiveComponent, ResponsiveMixin, WithTheme } from "../../../theme"
import { Flex } from "../../layout"
import { Input as MuiInput } from "@mui/material"
import { getComponentStyles, parseVariant, parseVariants, sxToStyle } from "../../../utils"
import { toMuiIcon } from "../icon"
import { Position } from "../position"

export type InputProps = WithTheme<ResponsiveComponent<'input'>>

// in the future theme and variant will come into play???
export const Input = styled('input')<InputProps>`
  ${({ theme, $variant, $sx }: InputProps) => {
    const variantDiff = typeof $variant === 'string'
      ? parseVariant($variant, theme)
      : (
        Array.isArray($variant)
          ? parseVariants($variant, theme)
          : {}
      )
    const componentDiff = getComponentStyles(
      'input',
      theme,
    )
    const responsive = getResponsiveStyles({
      ...componentDiff,
      ...variantDiff,
      ...($sx ?? {}),
    })
    return responsive
  }}
`

export const ChimericInput = (props: Omit<InputProps, 'theme'> & {
  mui?: boolean
}) => {
  const theme = useTheme()
  const { mui, $sx, style, ...rest } = props
  if (mui) {
    return (
      <MuiInput
        style={{
          ...sxToStyle($sx ?? {}),
          ...style,
        }}
        type={rest.type}
        value={rest.value}
        placeholder={rest.placeholder}
      />
    )
  }
  return (
    <Input {...rest} $sx={$sx} style={style} theme={theme} />
  )
}

export type TextAreaProps = WithTheme<ResponsiveComponent<'textarea'>>

export const TextArea = styled('textarea')<InputProps>`
  ${({ theme, $variant, $sx }: InputProps) => {
    const responsive = getResponsiveStyles({
      padding: '9px 18px',
      borderRadius: '0.25rem',
      border: '2px solid rgba(0, 0, 0, 0.6)',
      ...($sx ?? {}),
    })
    return responsive
  }}
  `

export const InputWithIcon = ({
  placeholder,
  inputProps,
  icon,
  iconStyles,
  mui,
}: {
  placeholder?: string
  inputProps?: Omit<InputProps, 'theme'>
  icon: string
  iconStyles?: CSSProperties
  mui?: boolean
}) => {
  const AltMuiIcon = toMuiIcon(icon as any) // let it be
  return (
    <div style={{ position: 'relative'}}>
      {
        mui
          ? (
            <Position tlbr={{ top: 'calc(50% - 12px)', left: '10px' }}>
              <AltMuiIcon style={{ ...iconStyles }} />
            </Position>
          )
          : (
            <i className={`fa-solid fa-${icon}`} style={{
              color: '#da1b27',
              fontSize: '18px',
              zIndex: 1,
              position: 'absolute',
              left: '15px',
              top: '25%',
              ...iconStyles,
            }}/>
          )
      }
      <Input placeholder={placeholder} {...inputProps} $sx={{ 
        width: '300px',
        paddingLeft: '40px',
        fontSize: '15px',
        borderRadius: '6px',
        ...inputProps?.$sx
      }} />
    </div>
  )
}

export type LabelProps = WithTheme<ResponsiveComponent<'label'>>

export const Label = styled('label')<LabelProps>`
  ${({ theme, $variant, $sx }: LabelProps) => {
    const responsive = getResponsiveStyles({
      // default styles??? theme???
      ...($sx ?? {}),
    })
    return responsive
  }}
`

// I don't care about the dom semantics... only the visuals baby.
// needs to be made customizable.  i.e. the gap
export const LabelizeIt = ({
  label,
  secondaryLabel,
  secondaryColor,
  secondaryStyles,
  flexDir = 'column',
  labelSx,
  children,
}: {
  label: string
  secondaryLabel?: string
  secondaryColor?: string
  secondaryStyles?: CSSProperties
  flexDir?: ResponsiveMixin
  labelSx?: CssProps
  children?: React.ReactNode
}) => {
  return (
    <Flex $sx={{ flexDirection: flexDir, gap: '6px' }}>
      <Flex row gap="12px" aic>
        <Label $sx={{
          color: 'inherit',
          fontSize: '16px',
          fontWeight: 'bold',
          ...labelSx,
          }}>
          {label}
        </Label>
        {
          secondaryLabel
            ? (
              <label style={{
                color: secondaryColor,
                fontSize: '16px',
                ...secondaryStyles
              }}>{secondaryLabel}</label>
            )
            : null
        }
      </Flex>
      {children}
    </Flex>
  )
}

// not a component a normal rational human would make
export const WithErrata = ({
  errorMessage,
  color = '#da1b27',
  messageStyles,
  errorIcon,
  children,
}: {
  errorMessage: string
  color?: string
  messageStyles?: CSSProperties
  errorIcon?: React.ReactNode
  children?: React.ReactNode
}) => {
  return (
    <Flex col gap="6px">
      {children}
      <Flex row gap="6px">
        {errorIcon ?? null}
        <span style={{
          color,
          ...messageStyles
        }}>{errorMessage}</span>
      </Flex>
    </Flex>
  )
}