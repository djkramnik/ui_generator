import React from "react"
import { colors, CssProps, shadows } from "../../../theme"
import { Box, Flex } from "../../layout"
import {Tabs as MuiTabs, Tab as MuiTab} from '@mui/material'
import { useThemeHelper } from "../../../hooks"

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
  tabContainerSx?: CssProps
  tabInnerSx?: CssProps
}

export const Tabs = ({
  tabs,
  tabSx,
  tabContainerSx,
  tabInnerSx,
  selectedSx = { backgroundColor: '#fff' },
  containerSx = { backgroundColor: '#fff' },
  tab,
  selectedIndex,
  children,
}: TabsProps) => {
  const { hookSc } = useThemeHelper()
  const Tab = tab ?? DefaultTab
  return (
    <Flex col $sx={{
      ...hookSc('dashboardTabs'),
      ...tabContainerSx
    }}>
      <Flex row $sx={{
        ...tabInnerSx
      }}> 
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

export const ChimericTabs = (props: TabsProps & {
  mui?: boolean
}) => {
  const { children, tabs, mui, ...rest} = props
  if (mui) {
    return (
      <Box $sx={{ width: '100%'}}>
        <Box>
          <MuiTabs value={rest.selectedIndex}>
            {
              tabs.map(t => {
                return (
                  <MuiTab key={t} label={t} />
                )
              })
            }
          </MuiTabs>
        </Box>
        {
          children
        }
      </Box>
    )
  }
  return (
    <Tabs tabs={tabs} {...rest}>
      {children}
    </Tabs>
  )
}