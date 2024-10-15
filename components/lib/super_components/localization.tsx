import { ChimericIcon, Icon } from "../atomics"
import { Flex, Span } from "../layout"

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