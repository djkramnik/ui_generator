import { colors, CssProps, shadows } from "../../../theme"
import { Box, Flex } from "../../layout"

const DefaultTab = ({
  containerSx,
  text,
  selected,
}: {
  containerSx?: CssProps
  text: string
  selected?: boolean
}) => {
  return (
    <Flex aic jcc $sx={{ 
      padding: '12px',
      cursor: 'pointer',
      borderBottom: `2px solid ${
        selected
          ? colors.amazonBlue
          : colors.amazonGrey
        }`,
      ...selected
        ? {
          boxShadow: shadows.lichessCard
        }
        : {},
      ...containerSx,
      }}>
      {text}
    </Flex>
  )
}

type TabsProps = {
  tabs: string[]
  tab?: typeof DefaultTab
  tabSx?: CssProps
  selectedIndex?: number
  selectedSx?: CssProps
  containerSx?: CssProps
  children?: React.ReactNode
}

export const Tabs = ({
  tabs,
  tabSx,
  selectedSx = { backgroundColor: '#fff' },
  containerSx = { backgroundColor: '#fff' },
  tab,
  selectedIndex,
  children,
}: TabsProps) => {
  const Tab = tab ?? DefaultTab
  return (
    <Flex col $sx={{ backgroundColor: colors.amazonGrey }}>
      <Flex row>
        {
          tabs.map((t, index) => {
            return (
              <Tab 
              selected={index === selectedIndex} 
                key={t} text={t} containerSx={{
                  ...tabSx,
                  ...(index === selectedIndex ? selectedSx : undefined)
                }}
              />
            )
          })
        }
      </Flex>
      <Box $sx={{
        ...containerSx,
      }}>
        {children}
      </Box>
    </Flex>
  )
}