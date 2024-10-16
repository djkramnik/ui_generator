import { useThemeHelper } from "../../hooks"
import { Heading, MiniDropdown } from "../atomics"
import { Box, Flex } from "../layout"
import { Navbar, RandomBrandLogo } from "../super_components"

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
        <RandomBrandLogo />
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
      </Navbar>
      <Flex $sx={hookSc('checkoutPageContainer')}>
        <Box $sx={hookSc('checkoutPageLeft')}>
          {childrenLeft}
        </Box>
        <Box $sx={hookSc('checkoutPageRight')}>
          {childrenRight}
        </Box>
      </Flex>
    </Box>
  )
}

export const ConfirmationPage = ({
  childrenLeft,
  childrenRight,
}: {
  childrenLeft?: React.ReactNode
  childrenRight?: React.ReactNode
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Box $sx={hookSc('confirmationPage')}>
      <Flex $sx={hookSc('confirmationPageContainer')}>
        <Box $sx={hookSc('confirmationPageLeft')}>
          {childrenLeft}
        </Box>
        <Box $sx={hookSc('confirmationPageRight')}>
          {childrenRight}
        </Box>
      </Flex>
    </Box>
  )
}