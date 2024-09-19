import { styled, useTheme } from 'styled-components'
import {
  colors,
  CssProps,
  getResponsiveStyles,
  ResponsiveComponent,
  WithTheme,
} from '../../../theme'
import { Box } from '../../layout'
import React from 'react'
import MuiSelect from '@mui/material/Select'
import { MenuItem } from '@mui/material'
import { getComponentStyles, mergeStyles, sxToStyle } from '../../../utils'
import { ChimericIcon, Icon } from '../icon'

export type SelectProps = WithTheme<ResponsiveComponent<'select'>>

// in the future theme and variant will come into play???
export const Select = styled('select')<SelectProps>`
  ${({ theme, $variant, $sx }: SelectProps) => {
    const responsive = getResponsiveStyles({
      ...mergeStyles({
        theme,
        $variant,
        component: 'select',
      }),
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
      ...mergeStyles({
        theme,
        $variant,
        component: 'option',
      }),
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
  const theme = useTheme()
  return (
    <Box
      $sx={{
        ...getComponentStyles('dropdownContainer', theme),
      }}
    >
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          right: '8px',
          top: 'calc(50% - 12px)',
          zIndex: '1',
        }}
      >
        <ChimericIcon
          icon={Icon.chevronDown}
          iconStyle={{
            ...sxToStyle({
              ...getComponentStyles('dropdownIcon', theme),
            }),
          }}
        />
      </div>
      {!artificial ? (
        <Select value={value ?? ''} $sx={{ ...selectSx }}>
          {options.map((optionText, i) => {
            return (
              <Option key={`${optionText}_${i}`} value={optionText}>
                {optionText}
              </Option>
            )
          })}
        </Select>
      ) : (
        <Box
          $sx={{
            ...getComponentStyles('dropdownPopup', theme),
            ...selectSx,
          }}
        >
          {value}
          <Box
            $sx={{
              ...getComponentStyles('dropdownOptionContainer', theme),
            }}
          >
            {options.map((optionText) => {
              return (
                <Box
                  $sx={{
                    ...getComponentStyles('dropdownOption', theme),
                    ...(
                      value === optionText
                        ? getComponentStyles('dropdownOptionSelected', theme)
                        : {}
                    ),
                  }}
                >
                  {optionText}
                </Box>
              )
            })}
          </Box>
        </Box>
      )}
    </Box>
  )
}

export const ChimericDropdown = (
  props: DropdownProps & {
    mui?: boolean
    label?: string
  }
) => {
  const theme = useTheme()
  const { mui, ...rest } = props
  if (mui) {
    return (
      <MuiSelect label={props.label} value={rest.value} style={{
        ...sxToStyle(mergeStyles({
          theme,
          component: 'select',
        }))
      }}>
        {props.options.map((optionText, i) => {
          return (
            <MenuItem
              style={{
                ...sxToStyle(mergeStyles({
                  theme,
                  component: 'option',
                }))
              }}
              key={`${optionText}_${i}`}
              value={optionText}>
              {optionText}
            </MenuItem>
          )
        })}
      </MuiSelect>
    )
  }
  return <Dropdown {...rest} />
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
  const theme = useTheme()
  return (
    <Box
      $sx={{
        ...getComponentStyles('dropdownContainer', theme),
      }}
    >
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          right: '8px',
          top: 'calc(50% - 12px)',
          zIndex: '1',
        }}
      >
        <ChimericIcon
          icon={Icon.chevronDown}
          iconStyle={{
            ...sxToStyle({
              ...getComponentStyles('dropdownIcon', theme),
            }),
          }}
        />
      </div>
      <Box
        $sx={{
          ...getComponentStyles('dropdownPopup', theme),
          ...selectSx,
        }}
      >
        {label}
        <Box
          $sx={{
            ...getComponentStyles('dropdownBubbleArrow', theme),
          }}
        ></Box>
        <Box
          $sx={{
            ...getComponentStyles('dropdownOptionContainer', theme),
            ...containerSx,
          }}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}
