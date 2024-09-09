import { CssProps, ResponsiveMixin } from "../../theme"
import { Anchor } from "../atomics"
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
}: {
  links: string[]
  w?: ResponsiveMixin
  p?: ResponsiveMixin
}) => {
  return (
    <Box>
      <Flex col $sx={{ width: w, margin: 'auto' }}>
        {
          links.map((l, index) => {
            return (
              <Box key={l} $sx={{
                padding: p ?? '20px 0',
                borderBottom: '1px solid #e6e4e4',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderTop: index === 0 ? `1pd solid #eee` : 'none'
              }}>
                <NewsLink text={l} />
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
  topHeadline
}: {
  imgSrc: string
  headline: string
  topHeadline?: string
}) => {

  return (
    <a href="#">
      <Flex col $sx={{ gap: '8px' }}>
        {
          topHeadline
            ? (
              <h2 style={{ fontSize: '36px', lineHeight: '38px', textAlign: 'center'}}>{topHeadline}</h2>
            )
            : null
        }
        <img src={imgSrc} style={{ width: '90%', margin: 'auto' }} />
        <h3 style={{ fontSize: '20px', lineHeight: '26px', width: '90%', margin: 'auto'}}>{headline}</h3>
      </Flex>
    </a>
  )
}