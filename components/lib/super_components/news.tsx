import { Box, Flex, ThreeCol } from "../layout"
import { CssProps } from "../../theme"
import { Anchor, Heading, Image } from "../atomics"
import { useThemeHelper } from "../../hooks"
import { useEffect, useState } from "react"
import { sizedArray } from "../../../util"
import { randomPick } from "../../utils"
import { fakeColumns, fakeHeadline, fakeLink, fakeNewsThumb } from "../../../data"

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

type ColFiller = {
  type: 'links',
} | {
  type: 'preview',
  withTop?: boolean
}

const RandomNewsCol = ({
  n
}: {
  n?: number
}) => {
  const [items, setItems] = useState<ColFiller[] | null>(null)
  useEffect(() => {
    if (items !== null) {
      return
    }
    const numItems = typeof n === 'number'
      ? Math.max(n, 1)
      : randomPick(1, 4)
    setItems(
      sizedArray(numItems)
        .map((_, index) => {
          return Math.random() > 0.6
            ? {
              type: 'links'
            }
            : {
              type: 'preview',
              withTop: index !== 0
                ? false
                : Math.random() > 0.3
            }
        })
    )

  }, [items, setItems])

  if (items === null) {
    return null
  }
  return (
    <>
      {
        items.map(item => {
          if (item.type === 'links') {
            return <RandomNewsLinks />
          }
          return <RandomNewsPreview withTop={item.withTop} />
        })
      }
    </>
  )
}

export const RandomThreeColNews = ({
  w,
}: {
  w?: [string, string, string]
}) => {
  const [widths, setWidths] = useState<[string, string, string] | null>(w ?? null)
  useEffect(() => {
    if (widths !== null) {
      return
    }
    setWidths(fakeColumns())
  }, [widths, setWidths])
  if (!widths) {
    return null
  }
  return (
    <ThreeCol w={widths}>
      <RandomNewsCol />
      <RandomNewsCol />
      <RandomNewsCol />
    </ThreeCol>
  )
}
