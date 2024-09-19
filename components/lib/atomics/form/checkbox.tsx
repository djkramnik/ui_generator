import { FormControlLabel } from "@mui/material"
import { CssProps, ResponsiveMixin } from "../../../theme"
import { Box, Flex } from "../../layout"
import { Copy } from "../copy"
import MuiCheckbox from '@mui/material/Checkbox'
import MuiRadio from '@mui/material/Radio'
import { useTheme } from "styled-components"
import { Input } from "./input"
import { getComponentStyles, sxToStyle } from "../../../utils"

type CheckboxProps = {
  checked?: boolean
  label: string
  radio?: boolean
  labelSx?: CssProps
}

export const Checkbox = ({
  checked,
  label,
  radio,
  labelSx,
}: CheckboxProps) => {
  const {
    theme
  } = useTheme()
  return (
    <Flex $sx={{
      ...getComponentStyles('checkboxContainer', theme),
    }} 
      row gap={theme.spacing.gap}>
      <Input
        $sx={{
          ...getComponentStyles('checkboxLabel', theme),
        }}
        type={radio ? 'radio' : 'checkbox'}
        checked={checked === true}
      />
      <Copy $sx={{ 
        ...getComponentStyles('checkboxLabel', theme),
        ...labelSx
        }}>{label}</Copy>
    </Flex>
  )
}

export const ChimericCheckbox = (props: CheckboxProps & {
  mui?: boolean
}) => {
  const theme = useTheme()
  const {mui, ...rest} = props
  if (mui) {
    return (
      <FormControlLabel
        style={{
          ...sxToStyle(
            getComponentStyles('checkboxContainer', theme),
          )
        }}
        required={true}
        control={
          rest.radio
            ? (
              <MuiRadio style={{
                ...sxToStyle(
                  getComponentStyles('checkboxInput', theme),
                ),
              }}
                defaultChecked={rest.checked === true} />
            )
            : (
              <MuiCheckbox defaultChecked={rest.checked === true} 
                style={{
                  ...sxToStyle(
                    getComponentStyles('checkboxInput', theme),
                  ),
                }}
              />
            )
          
        }
        label={rest.label}
      />
    )
  }
  return (
    <Checkbox {...rest} />
  )
}

export const CustomCheckbox = ({
  checked,
  label,
  gap,
  radio,
  labelSx,
  inputSx,
  icon,
  iconSx,
}: {
  checked?: boolean
  label: string
  gap?: ResponsiveMixin
  radio?: boolean
  labelSx?: CssProps
  inputSx?: CssProps
  icon?: React.ReactNode
  iconSx?: CssProps
}) => {
  const Icon = icon ?
  () => icon
  : 
  (
    () => <Copy $sx={{...iconSx}}>&#x2714;</Copy>
  )
  return (
    <Flex row gap={gap ?? '12px'} aic>
      <Box $sx={{
        border: '1px solid #333',
        borderRadius: radio ? '50%' : 'initial',
        width: '20px',
        aspectRatio: '1',
        textAlign: 'center',
        cursor: 'pointer',
        ...inputSx,
      }}>
        {checked ?
          <Icon />
          : null
        }
      </Box>
      <Copy $sx={{ ...labelSx }}>{label}</Copy>
    </Flex>
  )
}

