// forms everywhere

import type { NextPage } from 'next'
import { Navbar, NavbarLinks } from '../components/lib/applied'
import { GsapLogo } from '../components/svg'
import { Container } from '../components/lib/layout/container'
import { Flex, TwoCol } from '../components/lib'
import { Anchor, Button, Copy, Heading, Input, LabelizeIt, SimpleForm, TextArea, WithErrata } from '../components/lib/atomics'
import { Spacer } from '../components/lib/layout/spacer'
import { colors, CssProps } from '../components/theme'
import { AmazonPrimeLogo } from '../components/lib/logos'
import { ThemeToggle } from '../components/lib/theme_toggle'
import { Dropdown } from '../components/lib/atomics/form/select'
import { Checkbox } from '../components/lib/atomics/form/checkbox'
import { Toggle } from '../components/lib/atomics/form/toggle'
import { AccordionSection, TextAccordion } from '../components/lib/atomics/accordion'

const gsapInputSx: CssProps = {
  fontSize: '14px',
  padding: '18px 12px',
  backgroundColor: colors.gsapGrey2,
  color: colors.gsapWhite,
  border: `none`,
  borderBottom: `1px solid ${colors.gsapWhite}`,
  outline: 'none'
}

const errorSx: CssProps = {
  borderBottom: `1px solid ${colors.enercareRed}`,
}

const Checkout: NextPage = () => {
  return (
    <>
    <ThemeToggle />
      <div style={{ minHeight: '100vh', backgroundColor: '#333'}}>
        <Navbar h="60px" flexProps={{
          $sx: { borderBottom: '1px solid', borderColor: colors.gsapWhite }
        }}>
            <NavbarLinks>
              <GsapLogo style={{ width: '100px', marginRight: '12px' }} />
            </NavbarLinks>
        </Navbar>
        <Container>
          <Flex aic>
            <div style={{ width: '600px', margin: 'auto', color: colors.gsapWhite }}>
              <Spacer />
              <Flex col gap="12px">
                <Heading level={2} $sx={{ fontSize: '36px' }}>
                  Sign up
                </Heading>
                <Flex gap="6px">
                  <Heading level={4} $sx={{
                    fontSize: '16px',
                    fontWeight: 'normal',
                    color: colors.gsapGrey,
                  }}>Already signed up?</Heading>
                  <Anchor href="#">Sign In</Anchor>
                </Flex>
              </Flex>
              <Spacer h="12px" />
              <hr />
              <Spacer />
              <SimpleForm flexProps={{ gap: '30px' }}>
                <LabelizeIt label="Display Name" secondaryLabel="REQUIRED" secondaryStyles={{
                  fontSize: '12px'
                }}
                  secondaryColor={colors.gsapGreen}>
                  <Input placeholder="Display Name" $sx={gsapInputSx} />
                </LabelizeIt>
                <WithErrata
                  errorIcon={
                    <i className="fa-solid fa-circle-exclamation"
                    style={{ color: colors.enercareRed }} />
                  }
                  errorMessage="I can be normal! I know I can!">
                  <LabelizeIt label="Email Address" secondaryLabel="REQUIRED" secondaryStyles={{
                    fontSize: '12px'
                  }} secondaryColor={colors.gsapGreen}>
                    <Input 
                      placeholder="Email Address"
                      $sx={{
                        ...gsapInputSx,
                        ...errorSx,
                      }}
                    />
                  </LabelizeIt>
                </WithErrata>
                <LabelizeIt label="Password" secondaryLabel="REQUIRED" secondaryStyles={{
                  fontSize: '12px'
                }} secondaryColor={colors.gsapGreen}>
                  <Input type="password" placeholder="Password" $sx={{ fontSize: '14px', padding: '12px' }} />
                </LabelizeIt>
                <LabelizeIt label="Confirm Password" secondaryLabel="REQUIRED" secondaryStyles={{
                  fontSize: '12px'
                }} secondaryColor={colors.gsapGreen}>
                  <Input type="password" placeholder="Confirm Password" $sx={{ fontSize: '14px', padding: '12px' }} />
                </LabelizeIt>
                <hr />
                <Button $variant="pill" $sx={{ fontSize: '18px' }}>
                  Create Account
                </Button>
              </SimpleForm>
              <Spacer />
            </div>
          </Flex>
        </Container>
      </div>
      <div style={{ minHeight: '100vh', backgroundColor: colors.amazonGrey }}>
        <Navbar h="60px" bgc={colors.amazonDark} flexProps={{ }}>
          <NavbarLinks $sx={{ width: '200px' }}>
            <AmazonPrimeLogo />
          </NavbarLinks>
          <NavbarLinks $sx={{ justifyContent: 'center' }}>
            <Copy $sx={{
              fontSize: '30px',
              color: colors.gsapWhite,
            }}>
              Secure Checkout
            </Copy>
            <i className="fa-solid fa-chevron-down" style={{ fontSize: '20px '}} />
          </NavbarLinks>
          <NavbarLinks $sx={{ width: '200px', justifyContent: 'flex-end'}}>
            <i className="fa-solid fa-shopping-cart" style={{ fontSize: '30px' }} />
            <Copy><strong>Cart</strong></Copy>
          </NavbarLinks>
        </Navbar>
        <Container>
          <Spacer />
          <TwoCol widthLeft="70%" growRight>
            <Flex col gap="20px" $sx={{ padding: '0 20px' }}>
              <div style={{ width: '100%', minHeight: '300px', backgroundColor: '#fff', padding: '20px 0' }}>
                <SimpleForm>
                  <LabelizeIt label="Casual Greeting *">
                    <Dropdown
                      value="kookamunga"
                      options={['hi', 'hey', 'ayo', 'kookamunga']}
                      selectSx={{ width: '300px' }}
                      />
                  </LabelizeIt>

                  <LabelizeIt label="Random shit">
                    <Checkbox label="Can you put on an iron shirt?" checked />
                    <Checkbox radio label="I will chase Satan out of earf" checked />
                  </LabelizeIt>

                  <LabelizeIt label="Why are you so negative?">
                    <TextArea $sx={{ width: '50%' }}>Tone!</TextArea>
                  </LabelizeIt>

                  <LabelizeIt label="Best Beetlejuice day">
                    <Toggle 
                      selectedIndex={0}
                      options={[
                        'Monday',
                        'Toosday',
                        'Whensday',
                        'Hersday'
                      ]}
                    />
                  </LabelizeIt>
                  <TextAccordion label="Show holidays"
                    open copySx={{ 
                      color: colors.amazonBlue,
                      fontWeight: 'bold',
                      cursor: 'pointer'
                      }}>
                    <Flex col gap="4px" $sx={{ paddingLeft: '20px' }}>
                      <Copy>Christmas</Copy>
                      <Copy>Winter festival month</Copy>
                      <Copy>Winter solstice sacrificial period</Copy>
                      <Copy>Cranberry season</Copy>
                    </Flex>
                  </TextAccordion>
                  <TextAccordion label="Show holidays"
                    copySx={{ 
                      color: colors.amazonBlue,
                      fontWeight: 'bold',
                      cursor: 'pointer'
                      }}>
                    <Flex col gap="4px" $sx={{ paddingLeft: '20px' }}>
                      <Copy>Christmas</Copy>
                      <Copy>Winter festival month</Copy>
                      <Copy>Winter solstice sacrificial period</Copy>
                      <Copy>Cranberry season</Copy>
                    </Flex>
                  </TextAccordion>
                  <div style={{ width: '500px'}}>
                    <AccordionSection
                      heading="A Salut">
                      hi
                    </AccordionSection>
                    <AccordionSection
                      heading="Hi Jack" open>
                      Bye Jack
                    </AccordionSection>
                    <Spacer />
                  </div>
                  <AccordionSection
                    heading="Do we need a security code, call box or key to access?" open>
                    <SimpleForm>
                      <LabelizeIt label="Security code">
                        <Input type="text"
                          $sx={{ width: '70%' }}
                          placeholder="Security code for the door" />
                      </LabelizeIt>
                      <LabelizeIt label="Call box">
                        <Input type="text"
                          $sx={{ width: '70%' }}
                          placeholder="Call box number or name" />
                      </LabelizeIt>
                      <Checkbox 
                        label="Can you put on an iron shirt?"
                        labelSx={{ fontWeight: 'bold' }}
                        checked />
                    </SimpleForm>
                  </AccordionSection>

                </SimpleForm>
              </div>
              <div style={{ width: '100%', height: '300px', backgroundColor: '#fff' }} />
            </Flex>
            <div style={{ 
              width: '100%',
              height: '300px',
              backgroundColor: '#fff',
              padding: '0 20px',
              }} />
          </TwoCol>
        </Container>
      </div>
    </>
  )
}

export default Checkout