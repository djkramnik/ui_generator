import React, { useRef } from "react"
import { useThemeHelper } from "../../hooks"
import { Flex } from "../layout"

export const SearchSection = ({
  children,
  interludes,
  interludeInterval = 3,
}: {
  children?: React.ReactNode[]
  interludes?: React.ReactNode[]
  interludeInterval?: number
}) => {
  const interludesIndex = useRef<number>(0)
  const { hookSc }  = useThemeHelper()
  return (
    <Flex $sx={hookSc('searchPage')}>
      {
        React.Children.map(children,
          (child, index) => {
            if (index > 0 && !(index % interludeInterval)) {

              return (
                <>
                  {interludes?.[interludesIndex.current++] ?? null}
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