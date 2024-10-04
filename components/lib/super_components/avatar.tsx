import { useTheme } from 'styled-components'
import { getSuperComponentStyles } from '../../theme'
import { Box, Flex } from '../layout'
import { Copy, Heading, Image } from '../atomics'
import { useEffect, useState } from 'react'
import { randomItem } from '../../utils'

export type AvatarProps = {
  asset: string
  name: string
  position?: string
}

const avatars = [
  'a.jpg',
  'adam.jpg',
  'beetle.jpg',
  'ben.jpg',
  'bike.jpg',
  'debbie.jpg',
  'guillermo.jpg',
  'guts.jpg',
  'historian.jpg',
  'hulk.jpg',
  'kent.jpg',
  'monkey.jpg',
  'monkey2.jpg',
  'monkey3.jpg',
  'pilot.jpg',
  'rp.jpg',
  'ryan.jpg',
  'shruti.jpg',
  'superman.jpg',
]

export const MyAvatar = ({ asset, name, position }: AvatarProps) => {
  const theme = useTheme()
  return (
    <Box
      $sx={{
        ...getSuperComponentStyles('avatar', theme),
      }}
    >
      <Flex
        $sx={{
          ...getSuperComponentStyles('avatarInner', theme),
        }}
      >
        <Box
          $sx={{
            ...getSuperComponentStyles('avatarLeft', theme),
          }}
        >
          <Image
            src={`/avatars/${asset}`}
            $sx={{
              ...getSuperComponentStyles('avatarImg', theme),
            }}
          />
        </Box>
        <Flex
          $sx={{
            ...getSuperComponentStyles('avatarRight', theme),
          }}
        >
          <Heading
            level={4}
            $sx={{
              ...getSuperComponentStyles('avatarBig', theme),
            }}
          >
            {name}
          </Heading>
          {position ? (
            <Copy
              $sx={{
                ...getSuperComponentStyles('avatarLittle', theme),
              }}
            >
              {position}
            </Copy>
          ) : null}
        </Flex>
      </Flex>
    </Box>
  )
}

export const RandomAvatar = ({
  name,
  position,
}: {
  name: string
  position?: string
}) => {
  const [asset, setAsset] = useState<string | null>(null)
  useEffect(() => {
    if (asset !== null) {
      return
    }
    setAsset(randomItem(avatars))
  }, [setAsset, asset])

  if (!asset) {
    return
  }
  return <MyAvatar asset={asset} name={name} position={position} />
}
