import { useTheme } from "styled-components"
import { getSuperComponentStyles } from "../../theme"
import { Copy } from "../atomics"

export const Legalese = ({
  text,
}: {
  text: string
}) => {
  const theme = useTheme()
  return (
    <Copy $sx={{
      ...getSuperComponentStyles(
        'legalese', theme)
    }}>
      {text}
    </Copy>
  )
}