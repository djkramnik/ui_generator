import { CssProps, ResponsiveMixin } from "../../../theme"
import { Box, Flex } from "../../layout"
import { Copy } from "../copy"

export const Checkbox = ({
  checked,
  label,
  gap,
  radio,
  labelSx,
}: {
  checked?: boolean
  label: string
  gap?: ResponsiveMixin
  radio?: boolean
  labelSx?: CssProps
}) => {
  return (
    <Flex row gap={gap ?? '12px'}>
      <input type={radio ? 'radio' : 'checkbox'} checked={checked === true} />
      <Copy $sx={{ ...labelSx }}>{label}</Copy>
    </Flex>
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