import type { NextPage } from 'next'
import { ThemeToggle } from '../components/lib/theme_toggle'
import { ThreeColTestimonial } from '../components/lib/applied/testimonial'
import { NavBanner, Navbar, NavbarLinks } from '../components/lib/applied'
import { 
  Anchor,
  Button,
  ChimericButton,
  ChimericButtonWithIcon,
  ChimericHeading,
  Copy,
  Heading,
  Icon,
  IconButton,
  Image,
  InputWithIcon
} from '../components/lib/atomics'
import { StripeHero, VideoHero } from '../components/lib/applied/hero'
import { ShopifyLogo } from '../components/svg/logos/shopify'
import { Container } from '../components/lib/layout/container'
import { Flex } from '../components/lib'
import { StripeLogo } from '../components/svg/logos/stripe'
import { DynamicComponent } from '../components/dynamic'
import { StripeEmailInput } from '../components/dynamic/test'
import { Spacer } from '../components/lib/layout/spacer'
import { EnercareLogo } from '../components/svg/logos/enercare'
import { ThreeColCnn } from '../components/lib/applied/news'

const Home: NextPage = () => {
  return (
    <>
    <ThemeToggle />
      <Navbar bgc="#e6e4e4" c="#000" h="68px" w="90vw">
        <NavbarLinks wrapChildren>
          {'Commercial'}
          {'Builder'}
          {'PMs'}
          {'Blog'}
          {'Special Offers'}
          <span style={{
            fontWeight: 'bold',
            color: '#da1b27'
          }}>My Account</span>
          {'About Us'}
        </NavbarLinks>
        <NavbarLinks>
          <InputWithIcon mui icon={Icon.search} placeholder="Search" />
        </NavbarLinks>
      </Navbar>
      <Navbar bgc="#fff" c="#000" h="90px" w="90vw">
        <NavbarLinks gap="40px" $sx={{ alignItems: 'stretch' }}>
          <div style={{ marginRight: '20px'}}>
            <EnercareLogo />
          </div>
          <IconButton icon="shop" text="Shop" iconStyle={{ fontSize: '40px'}} />
          <IconButton icon="truck-front" text="Delivery" iconStyle={{ fontSize: '40px '}} />
          <IconButton icon="snowflake" text="Cooling" iconStyle={{ fontSize: '40px '}} />
          <IconButton mui icon="fire" text="Heating" iconStyle={{ fontSize: '40px '}} />
          <IconButton icon="umbrella" text="Waterproofing" iconStyle={{ fontSize: '40px '}} />
          <IconButton icon="headset" text="Support" iconStyle={{ fontSize: '40px' }} />
        </NavbarLinks>
        <NavbarLinks>
          <Flex col $sx={{ gap: '4px' }}>
            <Heading level={4}>Speak with an expert</Heading>
            <Flex $sx={{ gap: '4px'}}>
              <i className="fa-solid fa-phone" style={{
                color: '#da1b27',
                fontSize: '30px'
              }}/>
              <Heading level={4}>1-877-642-8607</Heading>
            </Flex>
          </Flex>
        </NavbarLinks>
      </Navbar>
      <VideoHero
        maskBgc='rgba(0, 0, 0, 0)'
        videoSrc="/thumbs/enercare.png"
        h="500px"
        minh="auto"
      >
        <Flex col $sx={{ height: '100%' }}>
          <Container w="90vw" $sx={{ 
            flexGrow: '1',
            display: 'flex',
            flexDirection: 'column',
            zIndex: '1',
            justifyContent: 'center'
            }}>
            <Flex row aic>
              <Flex col jcc $sx={{ width: '50%', color: '#fff', height: '80%', gap: '24px' }}>
                <Spacer />
                <Heading $variant="white" level={2} $sx={{ textAlign: 'center' }}>
                  Get up to $5000 on a prepaid credit card
                  with a cooling and heating combo rental
                </Heading>
                <Flex $sx={{ gap: '8px'}} aic jcc>
                  <Heading level={5} $variant="white">
                    Offer expires September 30, 2024.
                  </Heading>
                  <Anchor $variant="white" $sx={{ textDecoration: 'underline' }}>
                    View Terms and Conditions
                  </Anchor>
                </Flex>
                <ChimericButtonWithIcon
                  mui
                  $variant="pill"
                  flexProps={{ row: false, rowrev: true, $sx: { gap: '12px' } }}
                  $sx={{ width: 'fit-content', alignSelf: 'center', borderRadius: '48px' }}
                  bgc="#da1b27" c="#fff" text="Get Deal" icon="cart-shopping" />
              </Flex>
            </Flex>
          </Container>
        </Flex>
      </VideoHero>

      <NavBanner bgc="#006f51"
        lineOne="Click to find parking"
        lineTwo="" p="10px 0"
        hideClose
        flexProps={{ row: false, rowrev: true, $sx: { fontSize: '14px' } }}
      />
      <VideoHero
        maskBgc='rgba(0, 0, 0, 0.7)'
        videoSrc="/thumbs/parkingbg.png"
        backgroundStyle={{ transform: 'scaleX(-1)' }}
      >
        <Flex col $sx={{ height: '100%' }}>
          <Navbar bgc="transparent" h="90px" boxStyles={{ zIndex: '1'}} w="85vw">
            <NavbarLinks >
              <Flex>
                <Image src="/logos/greenp.png" $sx={{ width: '200px' }} />
              </Flex>
            </NavbarLinks>
            <NavbarLinks wrapChildren $sx={{ fontWeight: 'bold' }}>
              {'ABOUT US'}
              {'PARKING INFO'}
              {'SAFE BICYCLING'}
              {'MUNICIPAL RAG'}
            </NavbarLinks>
            <NavbarLinks gap="18px" $sx={{ fontWeight: 'bold' }}>
              {'TODO: Find Parking thing'}
            </NavbarLinks>
          </Navbar>
          <Container w="85vw" $sx={{ 
            flexGrow: '1',
            display: 'flex',
            flexDirection: 'column',
            zIndex: '1',
            justifyContent: 'center'
            }}>
            <Flex row aic>
              <Flex col jcc $sx={{ flexGrow: '1', width: '50%', color: '#fff', height: '80%', gap: '24px' }}>
                <ChimericHeading mui level={2}>
                  EXPLORE TORONTO,<br />
                  CAR BABIES
                </ChimericHeading>
                <Heading level={5} $variant="white">
                  Pay for parking with your credit card, and receive a free ticket.
                </Heading>
                <Flex $sx={{ gap: '20px' }}>
                  <ChimericButtonWithIcon
                    mui icon="arrow-right" text="PAY FOR PARKING"
                    bgc='#006f51'
                    p="20px"
                    c="#fff"
                    $sx={{ fontWeight: '800', border: '2px solid white' }} />
                  <ChimericButtonWithIcon icon="arrow-right" text="RIDE A BIKE"
                    bgc='#006f51'
                    p="20px"
                    c="#fff"
                    $sx={{ 
                      fontWeight: '800',
                      border: '2px solid white',
                    }}
                  />
                </Flex>
              </Flex>
              <Flex aic $sx={{ width: '50%'}}>
                <Image src="/thumbs/devices.png" $sx={{ width: '100%' }} />
              </Flex>
            </Flex>
          </Container>
        </Flex>
      </VideoHero>

      <StripeHero 
        bigText="Spyware infras to grow your case"
        littleText={
          `Every breath you take, every move you make, every bond you break, every step you take.
          Every single day, every word you say.  Every game you play, every night you stay.`
        }
        navbar={
          (
            <Navbar h="68px" bgc="transparent" w="80vw" c="#fff">
              <NavbarLinks wrapChildren gap="20px" $sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                <StripeLogo fill="#fff" />
                {'Products'}
                {'Solutions'}
                {'Resources'}
                {'Developers'}
                {'Pricing'}
              </NavbarLinks>
              <NavbarLinks wrapChildren gap="20px" $sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                {'Contact Sales'}
                <ChimericButton $sx={{
                  backgroundColor: '#fff',
                  color: '#FFC300',
                  borderRadius: '24px',
                  fontWeight: '700',
                  padding: '12px 18px',
                  fontSize: '16px'
                }}>
                  Sign In
                </ChimericButton>
              </NavbarLinks>

            </Navbar>
          )
        }
        buttonRow={
          (
            <Flex $sx={{ gap: "20px" }}>
              <DynamicComponent graph={StripeEmailInput} />
            </Flex>
          )
        }
      />
      <VideoHero 
        videoSrc="/videos/shopify.avif"
      >
        <Flex col $sx={{ height: '100%' }}>
          <Navbar bgc="transparent" h="60px" boxStyles={{ zIndex: '1'}}>
            <NavbarLinks wrapChildren>
              <ShopifyLogo style={{ width: '100px', marginRight: '12px' }} />
              {'Solutions'}
              {'Pricing'}
              {'Resources'}
              {'What\'s new'}
            </NavbarLinks>
            <NavbarLinks gap="18px">
              {'Log in'}
              <Button $variant={['transparent', 'pill', 'white', 'border']}>
                Start Free Trial
              </Button>
            </NavbarLinks>
          </Navbar>
          <Container $sx={{ flexGrow: '1', display: 'flex', flexDirection: 'column', zIndex: '1' }}>
            <Flex col jcc $sx={{ flexGrow: '1', width: '50%', color: '#fff', height: '80%', gap: '24px' }}>
              <Heading level={2} $variant="white">
                Some Javascript, <br />for a Monthly Fee
              </Heading>
              <Heading level={4} $variant="white">
                Will sell you javascript.. for food.<br />  And boats.  And cars.  And the future.
              </Heading>
            </Flex>
            <Flex jcsb aic $sx={{ height: '200px'}}>
              <Flex $sx={{ gap: '8px'}} aic>
                <Button $variant={['pill', 'white', 'transparent', 'border']}>
                  Start Free Trial
                </Button>
                <Copy $variant="white">
                  Get 3 days for free!<br /> Then we will begin the invoicing.
                </Copy>
              </Flex>
              <Button $variant={['white', 'transparent', 'pill', 'border']}>
                Watch the Shopify Story
              </Button>
            </Flex>
          </Container>
        </Flex>
      </VideoHero>

      <ThreeColCnn />
      <ThreeColTestimonial />
      
    </>
    
  )
}

export default Home