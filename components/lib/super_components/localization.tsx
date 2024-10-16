import { useThemeHelper } from "../../hooks"
import { ChimericIcon, Icon } from "../atomics"
import { Box, Flex, Span } from "../layout"

export const CanadaFlag = () => {
  return (
    <Span
      $sx={{
        backgroundImage: `url(/flags/flags.png)`,
        backgroundSize: '194px 295px',
        backgroundPositionX: '0',
        backgroundPositionY: '-184px',
        width: '24px',
        height: '18px'
      }}
    />
  )
}

export const LangDropdown = ({
  lang = 'EN',
}: {
  lang?: string
}) => {
  return (
    <Flex aic gap="2px" $sx={{
      color: '#eee'
    }}>
      <CanadaFlag />
      {lang}
      <ChimericIcon
        icon={Icon.caretDown}

        iconStyle={{
          color: '#eee', // should be inherit in theme??,
          marginLeft: '4px',
          fontSize: '12px'
        }}
      />
    </Flex>
  )
}

// globe icon, language, double caret within a button shaped outline
// flag, country within a button shaped outline 
export const OutlinedLangDropdown = ({
  icon,
  label = 'Canada',
}: {
  icon: string
  label?: string
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Box $sx={hookSc('outlinedLangDropdown')}>
      {icon}
      {label}
    </Box>
  )
}