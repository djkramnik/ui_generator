import { CssProps, ResponsiveMixin, ResponsiveMixinProps } from "../../theme"
import { Anchor, Heading } from "../atomics"
import { Box, Flex } from "../layout"

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
  w = '90%',
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
                justifyContent: 'center',
                alignItems: 'center',
                borderTop: index === 0 ? `1pd solid #eee` : 'none',
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
  headline,
  topHeadline,
  headlineSx,
  topHeadlineSx,
}: {
  imgSrc: string
  headline: string
  topHeadline?: string
  headlineSx?: CssProps
  topHeadlineSx?: CssProps
}) => {

  return (
    <a href="#">
      <Flex col $sx={{ gap: '8px' }}>
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
        <img src={imgSrc} style={{ width: '90%', margin: 'auto' }} />
        <Heading level={3} $sx={{ 
          fontSize: '20px',
          lineHeight: '26px',
          width: '90%',
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
  w = '90%',
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