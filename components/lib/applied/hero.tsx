import { CSSProperties } from 'react'
import { DynamicComponent } from '../../dynamic'
import { StripeHeroDashboard, StripePhoneNode } from '../../dynamic/test'
import { Heading } from '../atomics'
import { Box, BoxProps, Flex, TwoCol } from '../layout'
import { Spacer } from '../layout/spacer'
import { DiagonalSection } from './diagonal'
import { ResponsiveMixin } from '../../theme'

export const VideoHero = ({
  videoSrc,
  children,
  maskBgc,
  backgroundStyle,
  minh,
  h,
}: {
  videoSrc: string
  children?: React.ReactNode
  maskBgc?: string
  backgroundStyle?: CSSProperties
  minh?: ResponsiveMixin
  h?: ResponsiveMixin
}) => {
  return (
    <Box
      $sx={{
        minHeight: minh ?? '600px',
        height: h ?? '100vh',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${videoSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...backgroundStyle,
      }} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: maskBgc ?? 'rgba(0, 0, 0, 0.3)',
        }}
      />
      {children}
    </Box>
  )
}

export const StripeHero = ({
  bigText,
  littleText,
  navbar,
  buttonRow,
}: {
  bigText: string
  littleText: string
  navbar: React.ReactNode
  buttonRow?: React.ReactNode
}) => {
  return (
    <Flex col $sx={{ minHeight: '100vh', backgroundColor: 'transparent', position: 'relative' }}>
      <DiagonalSection />
      {navbar}
      <Spacer />
      <TwoCol widthLeft="50%" widthRight="50%">
        <Flex col $sx={{ gap: '30px', paddingLeft: '10vw' }}>
          <Spacer />
          <Heading
            level={1}
            $sx={{
              fontSize: '94px',
              lineHeight: '97px',
            }}
          >
            {bigText}
          </Heading>
          <Heading
            level={3}
            $sx={{
              fontWeight: 'normal',
              fontSize: '18px',
              color: 'rgb(66, 84, 102)',
              lineHeight: '28px',
            }}
          >
            {littleText}
          </Heading>
          {buttonRow ?? null}
          <Spacer />
          <Spacer />
        </Flex>
        <div style={{ position: 'relative' }}>
          <DynamicComponent graph={StripePhoneNode} />
          <DynamicComponent graph={StripeHeroDashboard} />
        </div>
      </TwoCol>
    </Flex>
  )
}
