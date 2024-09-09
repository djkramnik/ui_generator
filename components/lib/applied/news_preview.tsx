import { CSSProperties } from "react"
import { CssProps, ResponsiveMixin, ResponsiveMixinProps } from "../../theme"
import { Anchor, Copy, Heading } from "../atomics"
import { Box, Flex, ThreeCol, ThreeColProps, TwoCol } from "../layout"
import React from "react"

export const NewsLink = ({
  text,
  anchorSx,
}: {
  text: string
  anchorSx?: CssProps
}) => {
  return (
    <Anchor href="#" $sx={{
      fontSize: '18px',
      ...anchorSx,
      }}>
      {text}
    </Anchor>
  )
}

export const NewsLinkList = ({
  links,
  w = '100%',
  p = '12px 0',
  withDot,
}: {
  links: string[]
  w?: ResponsiveMixin
  p?: ResponsiveMixin,
  withDot?: boolean
}) => {
  return (
    <Box>
      <Flex col $sx={{ width: w, margin: 'auto' }}>
        {
          links.map((l, index) => {
            return (
              <Box key={l} $sx={{
                padding: p ?? '20px 0',
                borderBottom: index !== links.length - 1 ? '1px solid #e6e4e4' : 'none',
                display: 'flex',
                alignItems: 'center',
                borderTop: index === 0 ? `1px solid #eee` : 'none',
              }}>
                {
                  withDot
                    ? (
                      <div style={{display: 'list-item', marginLeft: '12px'}}>
                        <NewsLink text={l} />
                      </div>
                    )
                    : <NewsLink text={l} />
                }
              </Box>
            )
          })
        }
      </Flex>
    </Box>
  )
}

export const NewsPreview = ({
  imgSrc,
  imgStyle,
  headline,
  topHeadline,
  headlineSx,
  topHeadlineSx,
  h,
}: {
  imgSrc: string
  imgStyle?: CSSProperties
  headline: string
  topHeadline?: string
  headlineSx?: CssProps
  topHeadlineSx?: CssProps
  h?: ResponsiveMixin
}) => {

  return (
    <a href="#">
      <Flex col $sx={{ gap: '8px', height: h }}>
        {
          topHeadline
            ? (
              <Heading level={2} $sx={{
                fontSize: '36px',
                lineHeight: '38px',
                textAlign: 'center',
                ...topHeadlineSx,
              }}>
                {topHeadline}
              </Heading>
            )
            : null
        }
        <img src={imgSrc} style={{ width: '100%', margin: 'auto', ...imgStyle }} />
        <Heading level={3} $sx={{ 
          fontSize: '20px',
          lineHeight: '26px',
          width: '100%',
          margin: 'auto',
          ...headlineSx,
        }}>{headline}</Heading>
      </Flex>
    </a>
  )
}

export const NewsPreviewH = ({
  imgSrc,
  headline,
  headlineSx,
  w = '100%',
}: {
  imgSrc: string
  headline: string
  headlineSx?: CssProps
  w?: ResponsiveMixin
})  => {
  return (
    <a href="#">
      <Flex row $sx={{ gap: '8px', width: w, margin: 'auto' }}>
        <img src={imgSrc} style={{ width: '40%' }} />
        <Heading level={3} $sx={{ 
          fontSize: '16px',
          fontWeight: 'normal',
          ...headlineSx
          }}>
          {headline}
        </Heading>
      </Flex>
  </a>
  )
}

// TODO: customizable content you idiot
export const ThreeColNews = () => {
  return (
    <ThreeCol>
    <>
      <NewsPreview
        topHeadline="Read my lips says old man, whilst licking said lips disturbingly"
        imgSrc="/thumbs/yt_thumb1.jpg"
        headline="Unearthed recording of Black Keys Lead Singer reveals confession of lonely young maleness"
      />
      <NewsLinkList 
        links={[
          'Trump threatens a crash course in foreign diplomacy for Buttigieg and Harris.',
          'Tyreek Hill looked up at the roaring fans, blinking away the sweat trickling into his eyes.',
        ]}
      />
      <NewsPreview imgSrc="/thumbs/cnn12.jpg"
        headline="Fuck Santy Claus, say demoralized Ukrainian troops"
      />
      <NewsLinkList
        links={[
          'How technology helped prevent further bloodshed at the mass gun attack in Georgia.',
          'A painted world found in a Cupboard sold for $1.4M.  Could it be a long lost Rembrandt?',
          'Kanye West has his greatest success when he participates in charitable sports events.'
        ]}
      />

    </>
    <>
      <NewsPreview
        headline="Old insecure man looks disapprovingly at some random object in the distance, trying to hide his hurt feelings"
        imgSrc="/thumbs/cnn3.jpg"
      />
      <NewsLinkList 
        withDot
        links={[
          'If there is but one more infraction against our code... the whole thing was a disgusting charade.',
          'It looks fleek.  In time, everything will be revealed to you, don\'t worry.',
          'If that\'s the way it is, that\'s the way it is.  Sure I\'ll take care of you.',
          'I will be by every Sunday, was the last recorded statement witnesses allege.',
          'Can kids still do homework without smart phones experts ask.'

        ]}
      />
      <NewsPreviewH imgSrc="/thumbs/cnn14.jpg"
        headline="Heyyy, the capital of Canada.  This kid smart or what."
      />
      <NewsPreviewH imgSrc="/thumbs/cnn15.jpg"
        headline="Shyness is a curse, says Bobby Baccala."
      />
    </>
    <>
      <NewsPreview
        imgSrc="/thumbs/cnn1.jpg"
        headline="Body of British tech millionaire recovered from yacht, Italian official says, as divers search for his daughter"
      />
      <NewsLinkList 
        links={[
          'Put the pasta back in the pot with a little gravy, and a little butter.',
          'Fourty five seconds, staring up really nice, is the period of time when the macaroni absorbs the gravy.',
          'Canadian Prime Minster Justin Trudeau confides to Kamala Harris that Canada needs "a piece" in order to protect itself.',
          'How .38 calibre firearms helped prevent a mass killing in Las Vegas.',
          'The macaroni will be ready in thirty seconds is riling up some appetites.'
        ]}
      />
      <ThreeCol>
        <NewsPreview
          headlineSx={{ fontSize: '16px', fontWeight: 'normal' }}
          imgSrc="/thumbs/cnn5.jpg"
          headline="She was married to Tony Soprano for twenty fucking years.  This is all she has to show for it."
        />
        <NewsPreview
          headlineSx={{ fontSize: '16px', fontWeight: 'normal' }}
          imgSrc="/thumbs/cnn6.jpg"
          headline="Stop and smell the gorilla shit, it is good to get away, advised Trump's legal team."
        />
        <NewsPreview
          headlineSx={{ fontSize: '16px', fontWeight: 'normal' }}
          imgSrc="/thumbs/cnn7.jpg"
          headline="Flattery will get you nowhere, Mr. Bond."
        />
      </ThreeCol>
    </>
  </ThreeCol>
  )
}

// TODO: customizable content you idiot
export const TabbedThreeColNews = ({
  tabs,
}: {
  tabs: [string, string, string],
  children?: [React.ReactNode, React.ReactNode, React.ReactNode]
}) => {
  return (
    <ThreeCol>
      <>
        <Box $sx={{
          borderTop: '1px solid #e4e6e6',
        }}>
          <Box $sx={{
            marginBottom: '6px',
            borderTop: '5px solid #cc0000',
            width: '50px',
            height: '5px',
          }} />
          <Copy $sx={{ fontWeight: 'bold', fontSize: '12px' }}>{tabs[0].toUpperCase()}</Copy>
        </Box>
        <NewsPreview
          imgSrc="/thumbs/yt_thumb6.jpg"
          headline="What they discovered after attempting to get the Russian green beret, was a dead deer."
        />
        <NewsLinkList
          links={[
            'Beautiful tall women and beautiful short women learn to talk with one another',
            'Employers are now responsible for employees lost in the woods according to new ruling'
          ]}
        />
      </>
      <>
        <Box $sx={{
            borderTop: '1px solid #e4e6e6',
          }}>
          <Box $sx={{
            marginBottom: '6px',
            borderTop: '5px solid #cc0000',
            width: '50px',
            height: '5px',
          }} />
          <Copy $sx={{ fontWeight: 'bold', fontSize: '12px' }}>{tabs[1].toUpperCase()}</Copy>
        </Box>
        <TwoCol halvsies hGap="6px">
          <>
            <NewsPreview 
              imgSrc="/thumbs/cnn54.jpg"
              headline="You had better leave, strumpet"
              headlineSx={{ fontSize: '16px', fontWeight: 'normal '}}
            />
            <NewsPreview 
              imgSrc="/thumbs/cnn55.jpg"
              headline="Harrowing story of US Marines left starving, waiting for chopper rescue"
              headlineSx={{ fontSize: '16px', fontWeight: 'normal '}}
            />
          </>
          <>
            <NewsPreview 
              imgSrc="/thumbs/cnn56.jpg"
              headline="Men no longer know how to hunt in the woods: Study"
              headlineSx={{ fontSize: '16px', fontWeight: 'normal '}}
            />
            <NewsPreview 
              imgSrc="/thumbs/cnn57.jpg"
              headline="Beyonce unhurt in car accident that left three non celebrities hospitalized"
              headlineSx={{ fontSize: '16px', fontWeight: 'normal '}}
            />
          </>
        </TwoCol>
        <NewsLinkList
          links={['I will leave you here, you one shoe cocksucka',
            'Starving men on the brink of annihiliation more likely to laugh in an unhinged manner'
          ]}
        />
      </>
      <>
        <Box $sx={{
          borderTop: '1px solid #e4e6e6',
        }}>
          <Box $sx={{
            marginBottom: '6px',
            borderTop: '5px solid #cc0000',
            width: '50px',
            height: '5px',
          }} />
          <Copy $sx={{ fontWeight: 'bold', fontSize: '12px' }}>{tabs[2].toUpperCase()}</Copy>
        </Box>
        <NewsLinkList
          links={[
            'Apple releases programmable go go gadget watch',
            'Browser Daemon files for bankruptcy.  Who? says average joe on the street',
            'Man cheats on wife with a real strumpet say witnesses',
            'Study reveals that when people say capeesh, it is overwhelmingly meant rhetorically.',
            'Employer honks horn at employess for fifteen minutes, alleging them to be hard of hearing.'
          ]}
        />
        <NewsPreviewH
          imgSrc="/thumbs/cnn60.jpg"
          headline="These common household chemicals will cause severe itching, irritation all over."
        />
      </>
    </ThreeCol>
  )
}

// TODO: customizable content you lovable sort
export const HeadlineThreeColSection = ({
  headline,
  headlineSx,
  children,
  w,
}: {
  headline: string
  headlineSx?: CssProps
  children?: React.ReactNode
  w?: [ResponsiveMixin, ResponsiveMixin, ResponsiveMixin]
}) => {
  return (
    <Flex col $sx={{ gap: '12px', padding: '24px 0' }}>
      <Heading level={3} $sx={{
        fontSize: '22px',
        ...headlineSx,
      }}>
        {headline}
      </Heading>
      <Flex wrap row jcsb $sx={{ alignItems: 'stretch' }}>
        {
          React.Children.map(children, (c, index) => {
            return (
              <Box key={index} $sx={{ width: w?.[index % 3] ?? '30%' }}>
                {c}
              </Box>
            )
          })
        }
      </Flex>
    </Flex>
  )
}