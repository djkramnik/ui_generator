// two col
// recommends on the side

import { useEffect, useState } from 'react'
import { fakeHeadline, fakeParagraphs } from '../../../data'
import { NewsStoryHeadline, NewsStoryMedia, NewsStoryParagraph } from '../super_components/news'
import { Spacer } from '../layout/spacer'
import { Flex } from '../layout'
import { useThemeHelper } from '../../hooks'
import { randomPick } from '../../utils'

// a random combination of various news story elements
export const RandomNewsStory = ({
  withSocials,
  blackAndWhite,
  n,
}: {
  withSocials?: boolean
  blackAndWhite?: boolean
  n?: number
}) => {
  const { hookSc } = useThemeHelper()
  const [headline, setHeadline] = useState<string | null>(null)
  const [paragraphs, setParagraphs] = useState<string[] | null>(null)

  useEffect(() => {
    if (headline !== null || paragraphs !== null) {
      return
    }
    setHeadline(fakeHeadline())
    setParagraphs(fakeParagraphs(typeof n === 'number' ? n : randomPick(3, 8)))
  }, [headline, setHeadline, setParagraphs])

  if (!headline || !paragraphs) {
    return null
  }

  return (
    <Flex col $sx={hookSc('newsStoryContainer')}>
      <Spacer />
      <NewsStoryHeadline
        headline={headline}
        withSocials={withSocials}
        blackAndWhite={blackAndWhite}
      />
      <NewsStoryMedia withCaption />
      {paragraphs.map((p, index) => {
        const imgIndex = Math.random() > 0.7
          ? randomPick(0, p.length)
          : undefined
        return (
          <NewsStoryParagraph
            key={index}
            html={p}
          />
        )
      })}
      <Spacer />
    </Flex>
  )
}
