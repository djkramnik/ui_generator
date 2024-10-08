import { useTheme } from "styled-components"
import { Box, Flex } from "../layout"
import { RandomAvatar, RandomAvatarProps } from "./avatar"
import { getSuperComponentStyles, Theme } from "../../theme"
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
}: {
  title: string
  avatar: RandomAvatarProps
  meta?: string
  description: string
}) => {
  const theme = useTheme()
  const hookah = (s: keyof Theme['superComponents']) => {
    return {
      ...getSuperComponentStyles(
        s,
        theme,
      )
    }
  }
  return (
    <Flex $sx={{
      ...getSuperComponentStyles(
        'videoSearchResult',
        theme,
      )
    }}>
      <RandomThumbnail size="lg" />
      <Flex col $sx={{
        ...getSuperComponentStyles(
          'videoSearchInfo',
          theme,
        )
      }}>
        <Flex col>
          <Heading level={4} $sx={{
            ...getSuperComponentStyles(
              'searchResultTitle',
              theme,
            )
          }}>
            {title}
          </Heading>
          <Maybe condition="meta">
            <Heading level={5} $sx={{
              ...hookah('searchResultMeta')
            }}>
              {meta}
            </Heading>
          </Maybe>
        </Flex>

        <RandomAvatar {...avatar}
          avatarSx={{
            ...hookah('searchResultAvatar')
          }}
          headingSx={{
            ...hookah('searchResultAvatarHeading')
          }}
          copySx={{
            ...hookah('searchResultAvatarCopy')
          }}
          avatarRightSx={{
            gap: '0'
          }}
        />
        <Copy>
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