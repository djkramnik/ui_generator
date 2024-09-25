import { CSSProperties, useEffect, useRef, useState } from "react"
import { Box } from "../layout"

export const ContentFitter = ({
  children,
  extraPx,
}: {
  children?: React.ReactNode
  extraPx?: number
}) => {
  const boxRef = useRef<HTMLDivElement | null>(null)
  const [style, setStyle] = useState<CSSProperties | null>(null)
  useEffect(() => {
    if (style !== null || !boxRef.current) {
      return
    }
    const clientWidth = boxRef.current.clientWidth
    const modifiedWidth = clientWidth + (extraPx ?? 0)
    setStyle({
      width: `${modifiedWidth}px`
    })
  }, [setStyle, style, extraPx])
  return (
    <Box $sx={{ width: 'fit-content'}} ref={boxRef} style={style ?? {}}>
      {children}
    </Box>
  )
}