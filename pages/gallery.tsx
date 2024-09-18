import { Container } from '@mui/material'
import { Flex, Box } from '../components/lib'
import { Anchor, Button, ChimericAnchor, ChimericButton } from '../components/lib/atomics'
import { ThemeToggle } from '../components/lib/theme_toggle'
import { ResponsiveMixin } from '../components/theme'
import { Spacer } from '../components/lib/layout/spacer'

const Cell = ({
  children,
  bgc = '#aaa',
}: {
  children?: React.ReactNode
  bgc?: ResponsiveMixin
}) => {
  return (
    <Box
      $sx={{
        backgroundColor: bgc,
        padding: '12px',
        width: 'fit-content',
        marginBottom: '12px',
        alignSelf: 'stretch',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {children}
    </Box>
  )
}

const Gallery = () => {
  return (
    <>
      <ThemeToggle />
      <Spacer />
      <Container>
        <Flex row gap="6px">
          <Cell>
            <Button>Subscribe</Button>
          </Cell>
          <Cell>
            <Button $variant="pill">Subscribe</Button>
          </Cell>
          <Cell>
            <Button $variant="border">Subscribe</Button>
          </Cell>
          <Cell>
            <Button $variant={['pill', 'bold', 'border']}>
              Subscribe
            </Button>
          </Cell>
          <Cell>
            <Button $variant={['bold', 'border', 'shadow']}>
              Subscribe
            </Button>
          </Cell>
          <Cell>
            <Button $variant={['pill', 'bold', 'border', 'shadow', 'transparent']}>
              Subscribe
            </Button>
          </Cell>
          <Cell>
            <ChimericButton>Subscribe</ChimericButton>
          </Cell>
          <Cell>
            <ChimericButton mui
              $variant={['pill', 'bold', 'border', 'shadow', 'transparent']}>
              Subscribe
            </ChimericButton>
          </Cell>
        </Flex>
        <Flex row gap="6px">
          <Cell bgc="#eee">
            <Anchor href="#">About Us</Anchor>
          </Cell>
          <Cell bgc="#eee">
            <ChimericAnchor href="#" $variant="underline">About Us</ChimericAnchor>
          </Cell>
          <Cell bgc="#eee">
            <ChimericAnchor mui href="#">About Us</ChimericAnchor>
          </Cell>
        </Flex>
      </Container>
    </>
  )
}

export default Gallery
