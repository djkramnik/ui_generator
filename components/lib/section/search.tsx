import React, { useRef } from "react"
import { useThemeHelper } from "../../hooks"
import { Box, Flex } from "../layout"

export const SearchSection = ({
  children,
  interludes,
  interludeInterval = 3,
}: {
  children?: React.ReactNode[]
  interludes?: React.ReactNode[]
  interludeInterval?: number
}) => {
  const { hookSc }  = useThemeHelper()
  return (
    <Flex $sx={hookSc('searchPage')}>
      {
        React.Children.map(children,
          (child, index) => {
            if (index > 0 && !(index % interludeInterval)) {
              return (
                <>
                  <Box $sx={hookSc('searchInterlude')}>
                    {interludes?.[Math.floor(index / interludeInterval) - 1] ?? null}
                  </Box>
                  {child}
                </>
              )
            }
            return child
          }
        )
      }
    </Flex>
  )
}