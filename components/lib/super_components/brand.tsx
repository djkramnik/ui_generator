import { useTheme } from "styled-components"
import { useEffect, useState } from "react"
import { CnnLogo, EnercareLogo, GsapLogo, ShopifyLogo, StripeLogo } from "../../svg"
import { randomPick, shuffle } from "../../utils"
import { Box, Flex } from "../layout"
import { getSuperComponentStyles, sxToStyle } from "../../theme"
import { BrandIcon, ChimericIcon, Icon } from "../atomics"
import { sizedArray } from "../../../util"

const randomLogos = [
  StripeLogo,
  CnnLogo,
  EnercareLogo,
  GsapLogo,
  ShopifyLogo, 
]

export const RandomBrandLogo = ({
  fill,
}: {
  fill?: string
}) => {
  const theme = useTheme()
  const resolvedFill = fill ?? String(theme.palette.button)
  const [randomIndex, setRandomIndex] = useState<number | null>(null)
  useEffect(() => {
    if (randomIndex !== null) {
      return
    }
    setRandomIndex(
      randomPick(0, randomLogos.length - 1)
    )
  }, [setRandomIndex, randomIndex])
  const Logo = (
    randomIndex !== null
      ? (
        randomLogos[randomIndex]!
      )
      : () => null
  )
  return (
    <Box $sx={{
      ...getSuperComponentStyles('brandLogoContainer', theme)
    }}>
      <Logo fill={resolvedFill}
      />
    </Box>
  )
}

export const SocialMediaLink = ({
  icon,
  mui,
}: {
  icon: BrandIcon
  mui?: boolean
}) => {
  const theme = useTheme()
  return (
    <ChimericIcon
      mui={mui === true}
      icon={icon as Icon}
      iconStyle={{
        color: 'currentcolor',
        ...sxToStyle({
          ...getSuperComponentStyles(
            'socialMediaLink',
            theme,
          )
        })
      }}
    />
  )
}

export const SocialMediaButton = ({
  icon,
  blackAndWhite
}: {
  icon: BrandIcon
  blackAndWhite?: boolean
}) => {
  const theme = useTheme()
  return (
    <Box $sx={{
      ...getSuperComponentStyles(
        'socialMediaButton',
        theme
      ),
      ...(
        blackAndWhite === true
          ? {
            color: theme.palette.white,
            backgroundColor: '#333' // palette black
          }
          : {}
      )
    }}>
      <SocialMediaLink icon={icon} />
    </Box>
  )
}

export const SocialMediaButtonRow = ({
  icons,
  blackAndWhite
}: {
  icons: BrandIcon[]
  blackAndWhite?: boolean
}) => {
  const theme = useTheme()
  return (
    <Flex $sx={{
      ...getSuperComponentStyles(
        'socialMediaRow',
        theme
      )
    }}>
      {
        icons.map((icon, index) => {
          return (
            <SocialMediaButton
              key={index}
              icon={icon}
              blackAndWhite={blackAndWhite}
            />
          )
        })
      }
    </Flex>
  )
}

const socialMediaBrands: BrandIcon[] = [
  'discord',
  'docker',
  'facebook',
  'figma',
  'google',
  'instagram',
  'stripe',
  'tiktok',
  'twitter'
]

export const RandomSocialMediaButtonRow = ({
  n,
  blackAndWhite
}: {
  n?: number
  blackAndWhite?: boolean
}) => {
  const [socials, setSocials] = useState<BrandIcon[] | null>(null)

  useEffect(() => {
    const numItems = typeof n === 'number'
      ? Math.max(n, 0)
      : randomPick(3, 6)
    const randomizedSocials = shuffle(socialMediaBrands)
    setSocials(
      randomizedSocials.slice(0, numItems)
    )
  }, [socials, setSocials])

  if (!socials) {
    return null
  }
  return (
    <SocialMediaButtonRow blackAndWhite={blackAndWhite} icons={socials} />
  )
}