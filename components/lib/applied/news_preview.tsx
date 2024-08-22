import { Flex } from "../layout"

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
    <a href="#" style={{ textDecoration: 'none', color: '#333' }}>
      <Flex col $sx={{ gap: '8px' }}>
        {
          topHeadline
            ? (
              <h2 style={{ fontSize: '36px', lineHeight: '38px', textAlign: 'center'}}>{topHeadline}</h2>
            )
            : null
        }
        {/* todo copy component and img component. remove the default margins everywhere */}
        <img src={imgSrc} />
        <h3 style={{ padding: '0 8px', fontSize: '20px', lineHeight: '26px'}}>{headline}</h3>
      </Flex>
    </a>
  )
}