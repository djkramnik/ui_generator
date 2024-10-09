import { useTheme } from 'styled-components'
import { CssProps, getSuperComponentStyles } from '../../theme'
import { Box, Flex } from '../layout'
import { Copy, Heading, Image } from '../atomics'
import { useEffect, useState } from 'react'
import { randomItem } from '../../utils'
import { getRandomName, getRandomSentence } from '../../../data'

export type AvatarProps = {
  asset: string
  name: string
  position?: string
  avatarSx?: CssProps
  headingSx?: CssProps
  copySx?: CssProps
  avatarRightSx?: CssProps
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

export const MyAvatar = ({ 
  asset,
  name,
  position,
  avatarSx,
  avatarRightSx,
  headingSx,
  copySx,
}: AvatarProps) => {
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
            ...avatarSx,
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
            ...avatarRightSx,
          }}
        >
          <Heading
            level={4}
            $sx={{
              ...getSuperComponentStyles('avatarBig', theme),
              ...headingSx,
            }}
          >
            {name}
          </Heading>
          {position ? (
            <Copy
              $sx={{
                ...getSuperComponentStyles('avatarLittle', theme),
                ...copySx,
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

export type RandomAvatarProps = Omit<AvatarProps, 'asset'>

export const RandomAvatar = (props: RandomAvatarProps) => {
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
  return <MyAvatar asset={asset} {...props} />
}

export const TrueRandomAvatar = (props: Pick<RandomAvatarProps, 
  'avatarSx' | 'avatarRightSx' | 'copySx' | 'headingSx'> & { name?: string; position?: string }) => {
    const [name, setName] = useState<string | null>(props.name ?? null)
    const [position, setPosition] = useState<string | null>(props.position ?? null)
    useEffect(() => {
      if (name !== null || position !== null) {
        return
      } // x minute read is salient info bro
      setName(getRandomName({})) // name is a misnomer, so is position
      setPosition(getRandomSentence()) // it should just be line1 and line2... also need something more complicated than strings here
    }, [name, position, setName, setPosition])
    if (!name || !position) {
      return null
    }
    return (
      <RandomAvatar name={name} position={position} {...props} />
    )
  }
