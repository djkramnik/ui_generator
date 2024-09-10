// forms everywhere

import type { NextPage } from 'next'
import { Navbar, NavbarLinks } from '../components/lib/applied'
import { GsapLogo } from '../components/svg'
import { Container } from '../components/lib/layout/container'
import { Flex } from '../components/lib'
import { Anchor, Button, Heading, Input, SimpleForm } from '../components/lib/atomics'
import { Spacer } from '../components/lib/layout/spacer'

const colors: Record<string, string> = {
  gsapWhite: '#FFFCE1',
  gsapGrey: '#7c7c6f'
}

const Checkout: NextPage = () => {
  return (
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
            <SimpleForm>
              <Input placeholder="Test" />
              <Input placeholder="Test" />
              <Input placeholder="Test" />
              <hr />
              <Button $variant="pill">
                Create Account
              </Button>
            </SimpleForm>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Checkout