// two col 
// recommends on the side 

import { useEffect, useState } from "react"
import { fakeHeadline } from "../../../data"
import { NewsStoryHeadline } from "../super_components/news"
import { Spacer } from "../layout/spacer"
import { Flex } from "../layout"
import { useThemeHelper } from "../../hooks"
import { abort } from "process"

// a random combination of various news story elements
export const RandomNewsStory = ({
  withSocials,
  blackAndWhite,
}: {
  withSocials?: boolean
  blackAndWhite?: boolean
}) => {
  const { hookSc } = useThemeHelper()
  const [headline, setHeadline] = useState<string |  null>(null)
  useEffect(() => {
    if (headline !== null) {
      return
    }
    setHeadline(
      fakeHeadline()
    )
  }, [headline, setHeadline])
  if (!headline) {
    return null
  }

  return (
    <Flex col $sx={hookSc('newsStoryContainer')}>
      <Spacer />
      <NewsStoryHeadline headline={headline}
        withSocials={withSocials} blackAndWhite={blackAndWhite} />
    </Flex>
    
  )
}