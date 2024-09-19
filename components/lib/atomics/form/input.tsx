import { CSSProperties, styled, useTheme } from "styled-components"
import { CssProps, getResponsiveStyles, ResponsiveComponent, ResponsiveMixin, WithTheme } from "../../../theme"
import { Box, Flex } from "../../layout"
import { InputAdornment, Input as MuiInput } from "@mui/material"
import { getComponentStyles, mergeStyles, sxToStyle } from "../../../utils"
import { ChimericIcon, Icon, toMuiIcon } from "../icon"

export type InputProps = WithTheme<ResponsiveComponent<'input'>>

// in the future theme and variant will come into play???
export const Input = styled('input')<InputProps>`
  ${({ theme, $variant, $sx }: InputProps) => {
    const diff = mergeStyles({
      theme,
      $variant,
      component: 'input',
    })
    const responsive = getResponsiveStyles({
      ...diff,
      ...($sx ?? {}),
    })
    return responsive
  }}
`

export const ChimericInput = (props: Omit<InputProps, 'theme'> & {
  mui?: boolean
  muiIcon?: Icon
  muiIconEnd?: boolean
  muiIconStyle?: CSSProperties
}) => {
  const theme = useTheme()
  const { $sx, style, mui, muiIconEnd, muiIcon, muiIconStyle, ...rest } = props
  if (mui) {
    const AltMuiIcon = muiIcon ? toMuiIcon(muiIcon) : () => null
    const diff = mergeStyles({
      theme,
      $variant: props.$variant,
      component: 'input',
    })
    return (
      <MuiInput
        startAdornment={(
          muiIconEnd !== true
            ? (
              <InputAdornment position={'start'}>
                <AltMuiIcon style={muiIconStyle} />
              </InputAdornment>
            )
            : null
        )}
        endAdornment={(
          muiIconEnd === true
            ? (
              <InputAdornment position={'end'}>
                <AltMuiIcon style={muiIconStyle} />
              </InputAdornment>
            )
            : null
        )}
        style={{
          ...sxToStyle(diff),
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
      ...mergeStyles({
        theme,
        $variant,
        component: 'textArea',
      }),
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
  icon: Icon
  iconStyles?: CSSProperties
  mui?: boolean
}) => {
  const theme = useTheme()
  if (mui) {
    return (
      <ChimericInput
        mui
        muiIcon={icon}
        muiIconStyle={iconStyles}
        {...inputProps}
      />
    )
  }

  // HEY MIGRATE TO THEMES
  return (
    <Box $sx={{
      ...getComponentStyles('inputWithIconContainer', theme),
    }}>
      <ChimericIcon icon={icon} iconStyle={{
        ...sxToStyle(getComponentStyles('inputWithIconIcon', theme)),
        ...iconStyles,
      }}/>
      <Input placeholder={placeholder} {...inputProps} $sx={{ 
        ...getComponentStyles('inputWithIconInput', theme),
        ...inputProps?.$sx
      }} />
    </Box>
  )
}

export type LabelProps = WithTheme<ResponsiveComponent<'label'>>

export const Label = styled('label')<LabelProps>`
  ${({ theme, $variant, $sx }: LabelProps) => {
    const responsive = getResponsiveStyles({
      ...mergeStyles({
        theme,
        $variant,
        component: 'label',
      }),
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
  flexDir = 'column',
  labelSx,
  children,
}: {
  label: string
  secondaryLabel?: string
  flexDir?: ResponsiveMixin
  labelSx?: CssProps
  children?: React.ReactNode
}) => {
  return (
    <Flex $sx={{ flexDirection: flexDir, gap: '6px' }}>
      <Flex row gap="12px" aic>
        <Label $sx={{
          ...labelSx,
          }}>
          {label}
        </Label>
        {
          secondaryLabel
            ? (
              <Label $variant="secondarycolor">
                {secondaryLabel}
              </Label>
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
  messageStyles,
  errorIcon,
  children,
}: {
  errorMessage: string
  messageStyles?: CSSProperties
  errorIcon?: React.ReactNode
  children?: React.ReactNode
}) => {
  const {
    spacing: { smallGap },
    palette: { error },
  } = useTheme()

  return (
    <Flex col gap={smallGap}>
      {children}
      <Flex row gap={smallGap} aic>
        {errorIcon ?? null}
        <span style={{
          ...sxToStyle({
            color: error,
          }),
          ...messageStyles
        }}>{errorMessage}</span>
      </Flex>
    </Flex>
  )
}