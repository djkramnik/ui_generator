import { useTheme } from "styled-components"
import { getSuperComponentStyles } from "../../theme"
import { Box, Flex } from "../layout"
import { Copy, Heading, Image } from '../atomics'

export type AvatarProps = {
  asset: string
  name: string
  position?: string
}

export const MyAvatar = ({
  asset,
  name,
  position,
}: AvatarProps) => {
  const theme = useTheme()
  return (
    <Box $sx={{
      ...getSuperComponentStyles(
        'avatar',
        theme,
      )
    }}>
      <Flex $sx={{
        ...getSuperComponentStyles(
          'avatarInner',
          theme,
        )
      }}>
        <Box $sx={{
          ...getSuperComponentStyles(
            'avatarLeft',
            theme,
          )
        }}>
          <Image 
            src={`/avatars/${asset}`}
            $sx={{
              ...getSuperComponentStyles(
                'avatarImg',
                theme,
              )
            }}
          />
        </Box>
        <Flex $sx={{
          ...getSuperComponentStyles(
            'avatarRight',
            theme
          )
        }}>
          <Heading level={4} $sx={{
            ...getSuperComponentStyles(
              'avatarBig',
              theme
            )
          }}>
            {name}
          </Heading>
          {
            position
              ? (
                <Copy $sx={{
                  ...getSuperComponentStyles(
                    'avatarLittle',
                    theme
                  )
                }}>{position}</Copy>
              )
              : null
          }
        </Flex>
      </Flex>
    </Box>
  )
}