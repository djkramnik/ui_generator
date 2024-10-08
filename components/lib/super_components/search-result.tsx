import { Box, Flex } from "../layout"
import { RandomAvatar, RandomAvatarProps } from "./avatar"
import { RandomThumbnail } from "./thumbnail"
import { Copy, Heading, Maybe } from "../atomics"
import { ProductInfo, ProductInfoProps } from "./product"
import { useThemeHelper } from "../../hooks"

// do not try to conflate this with the vertical version
export const VideoSearchResult = ({
  title,
  avatar,
  meta,
  description,
  sm,
  md,
  vertical,
  noDescription,
  noAvatar,
}: {
  title: string
  avatar: RandomAvatarProps
  meta?: string
  description: string
  sm?: boolean
  md?: boolean
  vertical?: boolean
  noDescription?: boolean
  noAvatar?: boolean
}) => {
  const { hookSc } = useThemeHelper()

  return (
    <Flex $sx={{
      ...hookSc('videoSearchResult'),
      ...(md ? hookSc('videoSearchResultMd'): {}),
      ...(sm ? hookSc('videoSearchResultSm'): {}),
      ...(vertical ? hookSc('videoSearchVertical'): {}),
    }}>
      <RandomThumbnail size={
        md
          ? 'md'
          : (
            sm
              ? 'sm'
              : 'lg'
          )
      } />
      <Flex col $sx={{
        ...hookSc('videoSearchInfo'),
        ...(md ? hookSc('videoSearchResultMd'): {}),
        ...(sm ? hookSc('videoSearchResultSm'): {}),
      }}>
        <Maybe condition={!noDescription}>
          <Flex col>
            <Heading level={4}
              $sx={hookSc('searchResultTitle')}>
              {title}
            </Heading>
            <Maybe condition="meta">
              <Heading level={5}
                $sx={hookSc('searchResultMeta')}>
                {meta}
              </Heading>
            </Maybe>
          </Flex>
        </Maybe>

        <Maybe condition={!noAvatar}>
          <RandomAvatar {...avatar}
            avatarSx={hookSc('searchResultAvatar')}
            headingSx={hookSc('searchResultAvatarHeading')}
            copySx={hookSc('searchResultAvatarCopy')}
            avatarRightSx={{
              gap: '0'
            }}
          />
        </Maybe>

        <Copy $sx={{
          ...(md ? hookSc('videoSearchResultMd'): {}),
          ...(sm ? hookSc('videoSearchResultSm'): {}),
          fontWeight: 'normal'
        }}>
          {description}
        </Copy>
      </Flex>
    </Flex>
  )
}

// price component small dollerydoo sign, big dollar, small cents
// stars component

export type AmazonSearchResultProps = {
  sm?: boolean
  productInfo: Omit<ProductInfoProps, 'sm'>
}

export const AmazonSearchResult = ({
  sm,
  productInfo,
}: AmazonSearchResultProps) => {
  const { hookSc } = useThemeHelper()
  return (
    <Flex $sx={{
      ...hookSc('videoSearchResult'),
      ...(sm
        ? hookSc('amazonSearchSm')
        : {}
      )
    }}>
      <RandomThumbnail size={sm ? 'md' : 'lg'} />
      <ProductInfo
        {...productInfo}
        sm={sm}
      />
    </Flex>
  )
}

export const WikiSearchResult = ({

}) => {
  return null
}

export type GoogleSearchResultProps = {
  avatar: RandomAvatarProps
  heading: string
  description: string
  tags?: string[]
}

export const GoogleSearchResult = ({
  avatar,
  heading,
  description,
  tags,
}: GoogleSearchResultProps) => {
  const { hookSc } = useThemeHelper()
  return (
    <Flex $sx={hookSc('googleSearchResult')}>
      <RandomAvatar {...avatar}
        avatarSx={{
          ...hookSc('searchResultAvatar')
        }}
        headingSx={{
          ...hookSc('searchResultAvatarHeading')
        }}
        copySx={{
          ...hookSc('searchResultAvatarCopy')
        }}
        avatarRightSx={{
          gap: '0'
        }}
      />
      <Heading level={4} $sx={hookSc('googleSearchResultHeading')}>
        {heading}
      </Heading>
      <Copy $sx={hookSc('googleSearchResultDescription')}>
        {description}
      </Copy>
      <Maybe condition={tags}>
        <Flex $sx={hookSc('googleSearchResultTags')}>
          {
            (tags ?? []).map(t => (
              <Box key={t}
                $sx={hookSc('googleSearchResultTag')}>
                {t}
              </Box>
            ))
          }
        </Flex>
      </Maybe>
    </Flex>
  )
}