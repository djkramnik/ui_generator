import { CSSProperties, styled } from "styled-components"
import { CssProps, getResponsiveStyles, ResponsiveComponent, ResponsiveMixin, WithTheme } from "../../../theme"
import { Flex } from "../../layout"

export type InputProps = WithTheme<ResponsiveComponent<'input'>>

// in the future theme and variant will come into play???
export const Input = styled('input')<InputProps>`
  ${({ theme, $variant, $sx }: InputProps) => {
    const responsive = getResponsiveStyles({
      padding: '9px 18px',
      ...($sx ?? {}),
    })
    return responsive
  }}
`

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
}: {
  placeholder?: string
  inputProps?: Omit<InputProps, 'theme'>
  icon: string
  iconStyles?: CSSProperties
}) => {
  return (
    <div style={{ position: 'relative'}}>
      <i className={`fa-solid fa-${icon}`} style={{
        color: '#da1b27',
        fontSize: '18px',
        zIndex: 1,
        position: 'absolute',
        left: '15px',
        top: '25%',
        ...iconStyles,
      }}/>
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