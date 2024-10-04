import { useTheme } from 'styled-components'
import { getSuperComponentStyles, Theme } from '../../theme'
import { randomItem, randomPick } from '../../utils'
import { Image } from '../atomics'
import { useEffect, useState } from 'react'
import { Box } from '../layout'

export const ThumbnailImage = ({
  asset,
}: {
  asset: string
}) => {
  const theme = useTheme()
  return (
    <Image
      src={`/thumbs/${asset}`}
      $sx={{
        ...getSuperComponentStyles(
          'thumbnailImage',
          theme
        )
      }}
    />
  )
}

const thumbs = [
  'cnn1.jpg',
  'cnn2.jpg',
  'cnn3.jpg',
  'cnn4.jpg',
  'cnn5.jpg',
  'cnn6.jpg',
  'cnn7.jpg',
  'cnn8.jpg',
  'cnn9.jpg',
  'cnn10.jpg',
  'cnn11.jpg',
  'cnn12.jpg',
  'cnn13.jpg',
  'cnn14.jpg',
  'cnn15.jpg',
  'cnn16.jpg',
  'cnn17.jpg',
  'cnn18.jpg',
  'cnn19.jpg',
  'cnn20.jpg',
  'cnn21.jpg',
]

export const RandomThumbnailImage = () => {
  const [randomThumb, setRandomThumb]
    = useState<string | null>(null)
  
  useEffect(() => {
    if (randomThumb !== null) {
      return
    }
    setRandomThumb(randomItem(thumbs))
  }, [setRandomThumb])
  
  if (randomThumb === null) {
    return
  }
  return (
    <ThumbnailImage asset={randomThumb} />
  )
}

type ThumbnailSize = 
  | 'sm'
  | 'md'
  | 'lg'

const toThemeName = (sz: ThumbnailSize): keyof Theme['superComponents'] => {
  switch(sz) {
    case 'sm':
      return `thumbnailSm`
    case 'md':
      return `thumbnailMd`
    case 'lg':
      return `thumbnailLg`
  }
}

export const RandomThumbnail = ({
  size,
}: {
  size: 'sm' | 'md' | 'lg'
}) => {
  const theme = useTheme()
  return (
    <Box $sx={{
      ...getSuperComponentStyles(
        toThemeName(size),
        theme,
      )
    }}>
      <RandomThumbnailImage />
    </Box>
  )
}