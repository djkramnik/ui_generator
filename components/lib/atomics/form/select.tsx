import { styled } from "styled-components"
import { colors, CssProps, getResponsiveStyles, ResponsiveComponent, shadows, WithTheme } from "../../../theme"
import { Box } from "../../layout"
import React from "react"
import MuiSelect from "@mui/material/Select"
import { MenuItem } from "@mui/material"

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

type DropdownProps = {
  options: string[]
  value?: string
  selectSx?: CssProps
  artificial?: boolean
}

// ego lifting 
export const Dropdown = ({
  options,
  selectSx,
  value,
  artificial,
}: DropdownProps) => {
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
        zIndex: '1',
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
            <Box $sx={{
              position: 'relative',
              fontSize: '16px',
              padding: '9px 6px',
              borderRadius: '0.25rem',
              fontWeight: '400',
              border: '2px solid rgba(0, 0, 0, 0.6)',
              backgroundColor: '#fff',
              ...selectSx,
            }}>
              {value}
              <Box $sx={{
                position: 'absolute',
                top: 'calc(100% + 5px)',
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
          )
      }
    </Box>
  )
}

export const ChimericDropdown = (props: DropdownProps & {
  mui?: boolean
  label?: string
}) => {
  const { mui, ...rest } = props
  if (mui) {
    return (
      <MuiSelect label={props.label} value={rest.value}>
        {
          props.options.map((optionText, i) => {
            return (
              <MenuItem key={`${optionText}_${i}`} value={optionText}>
                {optionText}
              </MenuItem>
            )
          })
        }
      </MuiSelect>
    )
  }
  return (
    <Dropdown {...rest} />
  )
}

export const DropdownBubble = ({
  children,
  label,
  selectSx,
  containerSx,
}: {
  children?: React.ReactNode
  label: string
  selectSx?: CssProps
  containerSx?: CssProps
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
        zIndex: '1',
      }}>
        <i className="fa-solid fa-chevron-down" style={{ fontSize: '12px' }} />
      </div>
    <Box $sx={{
      position: 'relative',
      fontSize: '16px',
      padding: '9px 6px',
      borderRadius: '0.25rem',
      fontWeight: '400',
      border: '2px solid rgba(0, 0, 0, 0.6)',
      backgroundColor: '#fff',
      ...selectSx,
    }}>
      {label}
      <Box $sx={{
        position: 'absolute',
        top: '100%',
        width: '0', 
        height: '0', 
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderBottom: '5px solid #fff',
      }}>
      </Box>
      <Box $sx={{
        position: 'absolute',
        top: `calc(100% + 5px)`,
        left: '0',
        minWidth: '100%',
        height: 'auto',
        borderRadius: '0.25rem',
        padding: '6px',
        backgroundColor: '#fff',
        boxShadow: shadows.lichessCard,
        ...containerSx
      }}>
        {
          children
        }
      </Box>
    </Box>
    </Box>
  )
}