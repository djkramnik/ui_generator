
import { useTheme } from "styled-components"
import { getSuperComponentStyles } from "../../theme"
import { Box, Flex } from "../layout"
import { Card, RandomBrandLogo } from "../super_components"
import { Fullscreen } from "./fullscreen"
import { useThemeHelper } from "../../hooks"
import { Heading } from "../atomics"

export const AuthSection = ({
  children,
  background
}: {
  children?: React.ReactNode
  background?: React.ReactNode
}) => {
  const theme = useTheme()
  return (
    <Box $sx={{
      ...getSuperComponentStyles(
        'authContainer',
        theme
      )
    }}>
      <Box $sx={{
      ...getSuperComponentStyles(
        'authOverlay',
        theme
      )
    }}>
      {background}
      </Box>
      <Card cardSx={{
        ...getSuperComponentStyles(
          'authCard',
          theme
        )
      }}>
        {children}
      </Card>
    </Box>
  )
}

export const SideLogin = ({
  bg = 'rbc.jpg',
  heading,
}: {
  bg?: string
  heading: string
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Fullscreen>
      <Flex $sx={{
        ...hookSc('sideLogin')
      }}>
        <Flex $sx={{
          backgroundImage: `url(/backgrounds/${bg})`,
          ...hookSc('sideLoginBg')
        }}>
          <Flex $sx={hookSc('sideLoginBgInner')}>
            <RandomBrandLogo />
            <Heading level={3} $sx={hookSc('sideLoginBgHeading')}>
              {heading}
            </Heading>
          </Flex>
        </Flex>
        <Flex $sx={hookSc('sideLoginPanel')}>

        </Flex>
      </Flex>
    </Fullscreen>
  )
}