import { useEffect, useState } from "react"
import { useThemeHelper } from "../../hooks"
import { sxToStyle } from "../../theme"
import { ChimericIcon, Heading, Icon, Maybe, MiniDropdown } from "../atomics"
import { Box, Flex } from "../layout"
import { Container } from "../layout/container"
import { Navbar, RandomBrandLogo } from "../super_components"
import { ProceedCard, ShoppingCart, StupidPromotion } from "../super_components/checkout"
import { genFakePriceNumeric, genShoppingCart, genStupidPromotion } from "../../../data"
import { ProductInfoProps } from "../super_components/product"
import { randomPick } from "../../utils"
import { sizedArray } from "../../../util"

// amazon? walmart? sephora? mom and pop drug shop
// this includes the heading but it still needs to share
// the page with other components (i.e. the footer)
export const CheckoutPage = ({
  navHeading,
  navHeadingDropdown,
  childrenLeft,
  childrenRight,
}: {
  navHeading: string
  navHeadingDropdown?: boolean
  childrenLeft?: React.ReactNode
  childrenRight?: React.ReactNode
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Box $sx={hookSc('checkoutPage')}>
      <Navbar
        navbarSx={hookSc('checkoutNav')}
        navbarInnerSx={hookSc('checkoutNavInner')}
      >
        <Box $sx={{ position: 'absolute', left: '0'}}>
          <RandomBrandLogo />
        </Box>
        {
          navHeadingDropdown
            ? (
              <MiniDropdown
                text={navHeading}
                containerSx={hookSc('checkoutNavHeading')}
                iconSx={hookSc('checkoutNavHeadingIcon')}
                copySx={hookSc('checkoutNavHeadingLink')}
              />
            )
            : (
              <Heading level={2} $sx={hookSc('checkoutNavHeading')}>
                {navHeading}
              </Heading>
            )
        }
        <Box $sx={{ position: 'absolute', right: '0'}}>
          <ChimericIcon icon={Icon.shoppingCart}
            iconStyle={sxToStyle(hookSc('checkoutNavIcon'))}
          />
        </Box>
      </Navbar>
      <Flex $sx={hookSc('checkoutPageContainer')}>
        <Container>
          <Box $sx={hookSc('checkoutPageInner')}>
            <Box $sx={hookSc('checkoutPageLeft')}>
              {childrenLeft}
            </Box>
            <Box $sx={hookSc('checkoutPageRight')}>
              {childrenRight}
            </Box>
          </Box>
        </Container>
      </Flex>
    </Box>
  )
}

export const ConfirmationPage = ({
  childrenLeft,
  childrenRight,
  childrenTop,
}: {
  childrenLeft?: React.ReactNode
  childrenRight?: React.ReactNode
  childrenTop?: React.ReactNode
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Box $sx={hookSc('confirmationPage')}>
      <Flex $sx={hookSc('confirmationPageContainer')}>
        <Container>
          <Maybe condition={childrenTop !== undefined}>
            <Flex $sx={hookSc('confirmationPageTop')}>
              {childrenTop}
            </Flex>
          </Maybe>
          <Flex $sx={hookSc('confirmationPageInner')}>
            <Box $sx={hookSc('confirmationPageLeft')}>
              {childrenLeft}
            </Box>
            <Box $sx={hookSc('confirmationPageRight')}>
              {childrenRight}
            </Box>
          </Flex>
        </Container>
      </Flex>
    </Box>
  )
}

export const RandomConfirmationPage = () => {
  const [stupidPromotion, setPromotion] = useState<{
    asset: string
    buttonLabel: string
    html: string
  } | null>(null)
  const [shoppingCart, setShoppingCart] = useState<{
    heading: string;
    link?: string;
    products: (ProductInfoProps & {
        asset: string;
    })[];
    price: number;
    checkedIndexes?: number[];
  } | null>(null)
  const [proceedProps, setProceedProps] = useState<{
    totalItems: number
    price: number
  } | null>(null)
  
  useEffect(() => {
    if (stupidPromotion !== null ||
        shoppingCart !== null ||
      proceedProps !== null) {
      return
    }
    setPromotion(genStupidPromotion())
    setShoppingCart(genShoppingCart())
    setProceedProps({
      totalItems: randomPick(1, 5),
      price: genFakePriceNumeric(randomPick(2,3))
    })
    
  }, [
    stupidPromotion,
    setPromotion,
    shoppingCart,
    setShoppingCart,
    setProceedProps,
  ])

  if (stupidPromotion === null ||
      shoppingCart === null ||
    proceedProps === null) {
    return null
  }

  return (
    <ConfirmationPage
      childrenTop={
        <StupidPromotion {...stupidPromotion} />
      }
      childrenLeft={
        <ShoppingCart {...shoppingCart} />
      }
      childrenRight={
        <ProceedCard {...proceedProps} />
      }
    />
  )
}