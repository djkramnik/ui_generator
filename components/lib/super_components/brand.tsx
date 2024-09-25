import { useTheme } from "styled-components"
import { useEffect, useState } from "react"
import { CnnLogo, EnercareLogo, GsapLogo, ShopifyLogo, StripeLogo } from "../../svg"
import { randomPick } from "../../utils"

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
  return <Logo fill={resolvedFill} />
}