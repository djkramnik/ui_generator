import { CssProps } from "../../../theme"
import { Box, Flex } from "../../layout"
import { Copy } from "../copy"

export const TextAccordion = ({
  label,
  children,
  open,
  fs = '14px',
  copySx,
}:{
  label: string
  children: React.ReactNode
  open?: boolean
  fs?: string
  copySx?: CssProps
}) => {
  const icon = open ? "fa-chevron-up" : "fa-chevron-down"
  return (
    <Flex col gap="8px">
      <Flex row gap="6px" aic>
        <i className={`fa-solid ${icon}`} style={{ fontSize: fs }} />
        <Copy $sx={{ fontSize: fs, ...copySx }} >{label}</Copy>
      </Flex>
      <Box $sx={{ display: open ? 'block' : 'none'}}>
        {children}
      </Box>
    </Flex>
  )
}