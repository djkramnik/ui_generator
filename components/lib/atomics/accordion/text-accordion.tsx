import { useTheme } from "styled-components"
import { CssProps } from "../../../theme"
import { getComponentStyles } from "../../../utils"
import { Box, Flex } from "../../layout"
import { Copy } from "../copy"
import { ChimericIcon, Icon } from "../icon"

type TextAccordionProps = {
  label: string
  children: React.ReactNode
  open?: boolean
  copySx?: CssProps
  mui?: boolean
}

export const TextAccordion = ({
  label,
  children,
  open,
  copySx,
  mui,
}: TextAccordionProps) => {
  const theme = useTheme()
  const icon = open ? Icon.chevronUp : Icon.chevronDown
  return (
    <Flex col $sx={{
      ...getComponentStyles('textAccordionContainer', theme)
    }}>
      <Flex row aic $sx={{
        ...getComponentStyles('textAccordionSummary', theme)
      }}>
        <ChimericIcon icon={icon} mui={mui === true} 
          iconStyle={{ fontSize: 'inherit' }} />
        <Copy $sx={{ 
          ...getComponentStyles('textAccordionHeading', theme),
          ...copySx,
          }} >{label}</Copy>
      </Flex>
      <Box $sx={{ 
        ...getComponentStyles('textAccordionExpanded', theme),
        display: open ? 'block' : 'none',
        }}>
        {children}
      </Box>
    </Flex>
  )
}