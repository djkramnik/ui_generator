
import { useTheme } from "styled-components"
import { getSuperComponentStyles } from "../../theme"
import { Box, Flex, TwoCol } from "../layout"
import { NavbarShortcut, NavbarShortcutProps } from "../super_components"
import { RandomBrandLogo } from "../super_components/brand"
import { useThemeHelper } from "../../hooks"
import { useEffect, useState } from "react"
import { randomPick } from "../../utils"
import { sizedArray } from "../../../util"
import { fakeParagraphs, getRandomSentence } from "../../../data"

// NEED A RTL VERSION OF THIS PLZ
export const DashboardSection = ({
  sidebarChildren,
  navbarShortcutProps = {
    logo: <RandomBrandLogo fill="#fff" />,
    links: [['About', 'Contact Us', 'Sign in']],
    dropdowns: [[0, 0]]
  },
  children,
  withNav = true // randomize
}: {
  sidebarChildren?: React.ReactNode
  navbarShortcutProps?: NavbarShortcutProps
  children?: React.ReactNode
  withNav?: boolean
}) => {
  const theme = useTheme()
  return (
    <Flex col $sx={{
      ...getSuperComponentStyles(
        'dashboardContainer',
        theme,
      )
    }}>
      {
        withNav
          ? (
            <NavbarShortcut {...navbarShortcutProps} />
          )
          : (
            null
          )
      }
      <Flex $sx={{
        ...getSuperComponentStyles(
          'dashboardSubNav',
          theme,
        )
        }}>
          <Box $sx={{
            ...getSuperComponentStyles(
              'sidebarLeft', // TODO: based on prop; sidebarright
              theme,
            ),
            ...(withNav === false
                ? getSuperComponentStyles('sidebarLeftNoNav', theme)
                : {}
            )
          }}>
            {sidebarChildren}
          </Box>
          <Box $sx={{
            ...getSuperComponentStyles(
              'dashboardContent',
              theme,
            )
            }}>
            {children}
          </Box>
      </Flex>
    </Flex>
  )
}

export const RandomDashboardCards = ({
  randomHeadingGen,
  randomCopyGen,
  randomN,
}: {
  randomHeadingGen?: () => string
  randomCopyGen?: () => string
  randomN?: number
}) => {
  const { hookSc } = useThemeHelper()
  const [dashboardCards, setDashboardCards] = useState<Record<string, string> | null>(null)
  
  useEffect(() => {
    if (dashboardCards !== null) {
      return
    }
    const numItems = randomN ?? randomPick(2, 10)
    setDashboardCards(
      sizedArray(numItems)
        .reduce((acc) => {
          return {
            ...acc,
            [(randomHeadingGen ?? getRandomSentence)()]: (randomCopyGen ?? fakeParagraphs)()
          }
        }, {})
    )
  }, [
    randomHeadingGen,
    randomCopyGen,
    dashboardCards,
    setDashboardCards,
    randomN
  ])

  if (!dashboardCards) {
    return null
  }

  const cards = Object.entries(dashboardCards)

  return (
    <TwoCol halvsies>
      <Box $sx={hookSc('dashboardCardCol')}>
        {
          cards.filter((_, index) => index % 2)
            .map(() => null)
        }
      </Box>
      <Box $sx={hookSc('dashboardCardCol')}>
        {
          cards.filter((_, index) => !(index % 2))
            .map(() => null)
        }
      </Box>
    </TwoCol>
  )
}