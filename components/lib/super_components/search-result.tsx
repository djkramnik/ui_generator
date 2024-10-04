import { useTheme } from "styled-components"
import { Flex } from "../layout"
import { RandomAvatar, RandomAvatarProps } from "./avatar"
import { getSuperComponentStyles, Theme } from "../../theme"
import { RandomThumbnail } from "./thumbnail"
import { Copy, Heading, Maybe } from "../atomics"

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
            <Heading level={5}>
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