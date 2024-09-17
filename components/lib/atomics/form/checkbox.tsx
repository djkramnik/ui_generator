import { FormControlLabel } from "@mui/material"
import { CssProps, ResponsiveMixin } from "../../../theme"
import { Box, Flex } from "../../layout"
import { Copy } from "../copy"
import MuiCheckbox from '@mui/material/Checkbox'
import MuiRadio from '@mui/material/Radio'

type CheckboxProps = {
  checked?: boolean
  label: string
  gap?: ResponsiveMixin
  radio?: boolean
  labelSx?: CssProps
}

export const Checkbox = ({
  checked,
  label,
  gap,
  radio,
  labelSx,
}: CheckboxProps) => {
  return (
    <Flex row gap={gap ?? '12px'}>
      <input type={radio ? 'radio' : 'checkbox'} checked={checked === true} />
      <Copy $sx={{ ...labelSx }}>{label}</Copy>
    </Flex>
  )
}

export const ChimericCheckbox = (props: CheckboxProps & {
  mui?: boolean
}) => {
  const {mui, ...rest} = props
  if (mui) {
    return (
      <FormControlLabel
        required={true}
        control={
          rest.radio
            ? (
              <MuiRadio defaultChecked={rest.checked === true} />
            )
            : (
              <MuiCheckbox defaultChecked={rest.checked === true} />
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

