import { CSSProperties, styled } from "styled-components"
import { getResponsiveStyles, ResponsiveComponent, WithTheme } from "../../theme"

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

export const InputWithIcon = ({
  placeholder,
  inputProps,
  icon,
  iconStyles,
}: {
  placeholder?: string
  inputProps?: InputProps
  icon: string
  iconStyles?: CSSProperties
}) => {
  return (
    <div style={{ position: 'relative'}}>
      <i className={`fa-solid fa-${icon}`} style={{
        color: '#da1b27',
        fontSize: '18px',
        zIndex: 1,
        position: 'relative',
        left: '30px',
        top: '2px',
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