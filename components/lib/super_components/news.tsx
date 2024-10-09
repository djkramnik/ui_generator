import { Box, Flex, ThreeCol } from "../layout"
import { CssProps } from "../../theme"
import { Anchor, Heading, Image } from "../atomics"
import { useThemeHelper } from "../../hooks"
import { useEffect, useState } from "react"
import { sizedArray } from "../../../util"
import { randomPick } from "../../utils"
import { fakeHeadline, fakeLink, fakeNewsThumb } from "../../../data"

export const NewsPreviewH = ({
  asset,
  headline,
}: {
  asset: string
  headline: string
})  => {
  const { hookSc } = useThemeHelper()
  return (
    <Anchor href="#" $sx={hookSc('newsPreviewLink')}>
      <Flex row $sx={hookSc('newsPreviewH')}>
        <Image src={`/thumbs/${asset}`} $sx={hookSc('newsPreviewHImg')} />
        <Heading level={3} $sx={hookSc('newsPreviewHHeading')}>
          {headline}
        </Heading>
      </Flex>
  </Anchor>
  )
}

export const NewsPreview = ({
  asset,
  headline,
  topHeadline,
  sm,
}: {
  asset: string
  headline: string
  topHeadline?: string
  sm?: boolean
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Anchor href="#" $sx={hookSc('newsPreviewLink')}>
      <Flex col $sx={hookSc('newsPreview')}>
        {
          topHeadline
            ? (
              <Heading level={2} $sx={hookSc('newsPreviewTopHeading')}>
                {topHeadline}
              </Heading>
            )
            : null
        }
        <Image
          src={`/thumbs/${asset}`}
          $sx={hookSc('newsPreviewImg')}
        />
        <Heading level={3}
          $sx={{
            ...hookSc('newsPreviewHeading'),
            ...(sm ? hookSc('newsPreviewHeadingSm') : {})
          }}>
          {headline}
        </Heading>
      </Flex>
    </Anchor>
  )
}

export const RandomNewsPreview = ({
  sm,
  withTop,
}: {
  sm?: boolean
  withTop?: boolean
}) => {
  const [asset, setAsset] = useState<string | null>(null)
  const [topHead, setTopHead] = useState<string | null>(null)
  const [head, setHead] = useState<string | null>(null)

  useEffect(() => {
    if (asset !== null || head !== null) {
      return
    }
    setAsset(fakeNewsThumb())
    setHead(fakeHeadline())
    setTopHead(withTop ? fakeHeadline() : null)
  }, [withTop, asset, head, setAsset, setHead, setTopHead])

  if (!asset || !head) {
    return null
  }

  return (
    <NewsPreview
      asset={asset}
      sm={sm}
      topHeadline={topHead ?? undefined}
      headline={head}
    />
  )
}

export const NewsLink = ({
  text,
  anchorSx,
}: {
  text: string
  anchorSx?: CssProps
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Anchor href="#" $sx={{
      ...hookSc('newsLink'),
      ...anchorSx,
    }}>
      {text}
    </Anchor>
  )
}

export const NewsLinkList = ({
  links,
  withDot,
}: {
  links: string[]
  withDot?: boolean
}) => {
  const { hookSc } = useThemeHelper()
  return (
    <Box>
      <Flex col $sx={hookSc('newsLinkList')}>
        {
          links.map((l, index) => {
            return (
              <Box key={l} $sx={{
                ...hookSc('newsLinkContainer'),
                ...(
                  index === links.length - 1
                    ? {
                      borderBottom: 'none'
                    }
                    : {}
                ),
                ...(
                  index !== 0
                    ? {
                      borderTop: 'none'
                    }
                    : {}
                )
              }}>
                {
                  withDot
                    ? (
                      <Box $sx={hookSc('newsLinkDot')}>
                        <NewsLink text={l} />
                      </Box>
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

export const RandomNewsLinks = ({
  n,
}: {
  n?: number
}) => {
  const [links, setLinks] = useState<string[] | null>(null)
  useEffect(() => {
    if (links !== null) {
      return
    }
    const numLinks = typeof n === 'number'
      ? Math.max(1, n)
      : randomPick(1, 6)
    setLinks(
      sizedArray(numLinks)
        .map(() => fakeLink())
    )
  }, [links, setLinks, n])
  
  if (!links) {
    return
  }
  return (
    <NewsLinkList links={links} /> 
  )
}


export const ThreeColNews = ({
  w
}: {
  w: [string, string, string]
}) => {
  return (
    <ThreeCol w={w}>
    <>
      <RandomNewsPreview withTop />
      <RandomNewsLinks />
      <NewsPreview asset="cnn12.jpg"
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
        asset="cnn3.jpg"
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
      <NewsPreviewH asset="cnn14.jpg"
        headline="Heyyy, the capital of Canada.  This kid smart or what."
      />
      <NewsPreviewH asset="cnn15.jpg"
        headline="Shyness is a curse, says Bobby Baccala."
      />
    </>
    <>
      <NewsPreview
        asset="cnn1.jpg"
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
          sm
          asset="cnn5.jpg"
          headline="She was married to Tony Soprano for twenty fucking years.  This is all she has to show for it."
        />
        <NewsPreview
          sm
          asset="cnn6.jpg"
          headline="Stop and smell the gorilla shit, it is good to get away, advised Trump's legal team."
        />
        <NewsPreview
          sm
          asset="cnn7.jpg"
          headline="Flattery will get you nowhere, Mr. Bond."
        />
      </ThreeCol>
    </>
  </ThreeCol>
  )
}