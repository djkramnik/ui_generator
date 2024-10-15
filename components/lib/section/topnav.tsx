// import { DynamicComponent } from "../../dynamic"
// import { AmazonSearchbar } from "../../dynamic/test"
import { useThemeHelper } from "../../hooks"
import { StripeLogo } from "../../svg"
import { colors } from "../../theme"
import { Anchor, ButtonWithIcon, ChimericIcon, Copy, Dropdown, Heading, Icon, Input, Maybe, MiniDropdown } from "../atomics"
import { Box, Flex, Span } from "../layout"
import { MyAvatar, Navbar, RandomBrandLogo } from "../super_components"
import { LangDropdown } from "../super_components/localization"

const AmazonDropdown = ({
  firstLine = 'Hello, David',
  secondLine = 'Accounts & Lists',
}: {
  firstLine?: string
  secondLine?: string
}) => {
  return (
    <Flex col>
      <Copy $sx={{
        fontSize: '12px',
        color: '#eee'
      }}>{firstLine}</Copy>
      <Flex aic gap="4px">
        <Copy $sx={{
          fontSize: '16px',
          color: '#eee',
          fontWeight: 'bold'
        }}>
          {secondLine}
        </Copy>
        <ChimericIcon icon={Icon.caretDown}
          iconStyle={{
            color: '#eee',
            fontSize: '12px'
          }}
        />
      </Flex>
    </Flex>
  )
}

export const AmazonSearchbar = () => {
  const { theme, hookSc } = useThemeHelper()
  return (
    <Box $sx={{
      borderRadius: '4px',
      height: '40px',
      display: 'flex',
      alignItems: 'stretch',
      minWidth: '500px'
    }}>
      {/** nav left */}
      <Box $sx={{
        backgroundColor: 'rgb(230, 230, 230)',
        color: colors.amazonDark,
        padding: '0 12px',
        borderBottomLeftRadius: '4px',
        borderTopLeftRadius: '4px'
      }}>
        <Flex aic gap="4px" $sx={{
          height: '100%'
        }}>
          {'All'}
          <ChimericIcon
            icon={Icon.caretDown}
            iconStyle={{
              color: colors.amazonDark,
              fontSize: '12px'
            }}
          />
        </Flex>
      </Box>
      <Input 
        placeholder="Search Amazon.ca"
        $sx={{
          flexGrow: '1',
          backgroundColor: theme.palette.white,
          border: 'none'
        }}
      />
      <Box $sx={{
        backgroundColor: colors.amazonYellow,
        padding: '0 12px',
        borderBottomRightRadius: '4px',
        borderTopRightRadius: '4px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <ChimericIcon
          icon={Icon.search}

        />
      </Box>
    </Box>
  )
}

const AmazonTopNav = () => {
  const { hookSc, theme } = useThemeHelper()
  return (
    <Navbar
      navbarSx={hookSc('amazonTopNav')}
      navbarInnerSx={hookSc('amazonTopNavInner')}
    >
      <Flex gap="12px" aic>
        <StripeLogo fill="#eee" />
        <MyAvatar icon={Icon.location}
          name="Deliver to David"
          position="Toronto M1S 1C1"
          headingSx={{
            fontSize: '14px',
            color: '#eee'
          }}
          copySx={{
            fontSize: '14px',
            color: '#eee'
          }}
          avatarIconSx={{
            color: theme.palette.white
          }}
          avatarSx={{
            width: 'auto'
          }}
          avatarRightSx={{
            alignSelf: 'initial',
            gap: '0'
          }}
        />
      </Flex>
      <Flex aic gap="18px">
        <AmazonSearchbar />
        <LangDropdown />
        <AmazonDropdown />
        <Heading level={4} $sx={{
          fontSize: '14px',
          color: '#eee',
          fontWeight: 'bold'
        }}>
          Returns &<br />Orders
        </Heading>
        <Flex aic>
          <ChimericIcon
            icon={Icon.shoppingCart}
            iconStyle={{
              color: '#eee'
            }}
          />
          <Span $sx={{
            color: '#eee',
            fontSize: '12px'
          }}>Cart(1)</Span>
        </Flex>

      </Flex>
    </Navbar>
  )
}

const AmazonMidNav = ({
  options = [
    'Buy Again',
    'Prime',
    'Registry',
    'Deals Store',
    'Browsing History',
    'David\'s Store',
    'Best Sellers',
    'Home',
    'Gift Ideas',
    'New Releases',
    'Books',
    'Health & Household'
  ],
  dropdownIndexes = [1, 4],
}: {
  options?: string[]
  dropdownIndexes?: number[]
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Navbar
      navbarSx={hookSc('amazonMidNav')}
      navbarInnerSx={hookSc('amazonMidNavInner')}
    >
      <ButtonWithIcon icon={Icon.hamburger}
        $sx={{
          paddingLeft: '0'
        }}
        text="All"
        iconStyle={{
          color: 'inherit'
        }}
        iconPos="start"
        $variant={['transparent', 'bold']}
      />
      {
        options.map((option, index) => {
          if (dropdownIndexes.includes(index)) {
            return (
              <MiniDropdown text={option}
                copySx={{ color: 'inherit '}}
                iconSx={{ color: 'inherit' }}
              />
            )
          }
          return (
            <Anchor key={option} $sx={{
              color: 'inherit'
            }}>
              {option}
            </Anchor>
          )
        })
      }
    </Navbar>
  )
}

const AmazonBottomNav = ({
  options=[
    'Today\'s Deal',
    'Outlet Deals',
    'Amazon Resale',
    'Coupons',
    'eBook Deals',
    'Subscribe & Save'
  ],
  dropdownIndexes = [0]
}: {
  options?: string[],
  dropdownIndexes?: number[]
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Navbar
      navbarSx={hookSc('amazonBottomNav')}
      navbarInnerSx={hookSc('amazonBottomNavInner')}
    >
      {
        options.map((option, index) => {
          if (dropdownIndexes.includes(index)) {
            return (
              <MiniDropdown text={option}
                copySx={{ color: 'inherit'}}
                iconSx={{ color: 'inherit' }}
              />
            )
          }
          return (
            <Anchor key={option} $sx={{
              color: 'inherit'
            }}>
              {option}
            </Anchor>
          )
        })
      }
    </Navbar>
  )
}

export const TopNav = ({
  withTop,
  withMid,
  withBottom
}: {
  withTop?: boolean
  withMid?: boolean
  withBottom?: boolean
}) => {
  return (
    <Flex col>
      <Maybe condition={withTop}>
        <AmazonTopNav />
      </Maybe>
      <Maybe condition={withMid}>
        <AmazonMidNav />
      </Maybe>
      <Maybe condition={withBottom}>
        <AmazonBottomNav />
      </Maybe>
    </Flex>
  )
}

