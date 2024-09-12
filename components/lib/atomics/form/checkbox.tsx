import { CssProps, ResponsiveMixin } from "../../../theme"
import { Flex } from "../../layout"
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