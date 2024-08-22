import { Flex } from "../layout"

export const NewsPreview = ({
  imgSrc,
  headline
}: {
  imgSrc: string
  headline: string
}) => {

  return (
    <a href="#" style={{ textDecoration: 'none' }}>
      <Flex col $sx={{ gap: '8px' }}>
        {/* todo copy component and img component. remove the default margins everywhere */}
        <img src={imgSrc} />
        <h3 style={{ color: '#333', fontSize: '20px', lineHeight: '26px'}}>{headline}</h3>
      </Flex>
    </a>
  )
}