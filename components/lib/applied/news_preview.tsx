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
    <a href="#">
      <Flex col $sx={{ gap: '8px' }}>
        {
          topHeadline
            ? (
              <h2 style={{ fontSize: '36px', lineHeight: '38px', textAlign: 'center'}}>{topHeadline}</h2>
            )
            : null
        }
        {/* todo copy component and img component. remove the default margins everywhere */}
        <img src={imgSrc} style={{ width: '90%', margin: 'auto' }} />
        <h3 style={{ fontSize: '20px', lineHeight: '26px', width: '90%', margin: 'auto'}}>{headline}</h3>
      </Flex>
    </a>
  )
}