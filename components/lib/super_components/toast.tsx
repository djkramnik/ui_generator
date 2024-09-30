import { useTheme } from "styled-components"
import { getSuperComponentStyles } from "../../theme"
import { Position } from "../atomics/position"
import { Box } from "../layout"

export type ToastType = 'success' | 'info' | 'error'

export const Toast = ({
  type,
  message,
}: {
  type: ToastType
  message: string
}) => {
  const theme = useTheme()
  return (
    <Position
      position="fixed"
      containerSx={{
        top: '0',
        zIndex: '2',
        height: 'fit-content',
      }}>
      <Box $sx={{
        ...getSuperComponentStyles('toast', theme),
        ...getSuperComponentStyles(type, theme),
      }}>
        {message}
      </Box>
    </Position>
  )
}