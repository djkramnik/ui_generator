import { styled } from "styled-components"
import { colors, CssProps, getResponsiveStyles, ResponsiveComponent, shadows, WithTheme } from "../../../theme"
import { Box } from "../../layout"

export type SelectProps = WithTheme<ResponsiveComponent<'select'>>

// in the future theme and variant will come into play???
export const Select = styled('select')<SelectProps>`
  ${({ theme, $variant, $sx }: SelectProps) => {
    const responsive = getResponsiveStyles({
      outline: 'none',
      appearance: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      padding: '9px 6px',
      borderRadius: '0.25rem',
      fontWeight: '400',
      border: '2px solid rgba(0, 0, 0, 0.6)',
      ...($sx ?? {}),
    })
    return responsive
  }}
`

export type OptionProps = WithTheme<ResponsiveComponent<'option'>>

// in the future theme and variant will come into play???
export const Option = styled('option')<SelectProps>`
  ${({ theme, $variant, $sx }: SelectProps) => {
    const responsive = getResponsiveStyles({
      padding: '9px 6px',
      ...($sx ?? {}),
    })
    return responsive
  }}
`

// ego lifting 
export const Dropdown = ({
  options,
  selectSx,
  value,
  artificial,
}: {
  options: string[]
  value?: string
  selectSx?: CssProps
  artificial?: boolean
}) => {
  return (
    <Box $sx={{
      position: 'relative',
      display: 'inline-block',
      width: 'fit-content'
    }}>
      <div style={{
        pointerEvents: 'none',
        position: 'absolute',
        right: '8px',
        top: 'calc(50% - 12px)',

      }}>
        <i className="fa-solid fa-chevron-down" style={{ fontSize: '12px' }} />
      </div>
      {
        !artificial
          ? (
            <Select value={value ?? ''} $sx={{ ...selectSx }}>
              {
                options.map((optionText, i) => {
                  return (
                    <Option key={`${optionText}_${i}`} value={optionText}>
                      {optionText}
                    </Option>
                  )
                })
              }
            </Select>
          )
          : (
            <>
              <Box $sx={{
                position: 'relative',
                fontSize: '16px',
                padding: '9px 6px',
                borderRadius: '0.25rem',
                fontWeight: '400',
                border: '2px solid rgba(0, 0, 0, 0.6)',
                ...selectSx,
              }}>
                {value}
                <Box $sx={{
                  position: 'absolute',
                  bottom: '-130px',
                  left: '0',
                  width: '100%',
                  height: 'auto',
                  borderRadius: '0.25rem',
                  padding: '6px',
                  backgroundColor: '#fff',
                  boxShadow: shadows.lichessCard
                }}>
                  {
                    options.map((optionText) => {
                      return (
                        <Box $sx={{
                          padding: '4px 6px',
                          backgroundColor: value === optionText
                            ? colors.antBlueLight
                            : 'transparent'
                        }}>
                          {optionText}
                        </Box>
                      )
                    })
                  }
                </Box>
              </Box>
            </>
          )
      }
    </Box>
  )
}