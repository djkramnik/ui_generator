import { Flex } from "./flex"

export const ThreeCol = ({
  hGap = '12px',
  vGap = '12px',
  children,
}: {
  hGap?: string
  vGap?: string
  children: [React.ReactNode, React.ReactNode, React.ReactNode]
}) => {
  return (
    <Flex row $sx={{ gap: hGap }}>
      <Flex col $sx={{ width: '33%', gap: vGap }}>
        {children[0] ?? null}
      </Flex>
      <Flex col $sx={{ width: '33%', gap: vGap}}>
        {children[1] ?? null}
      </Flex>
      <Flex col $sx={{ width: '33%', gap: vGap}}>
        {children[2] ?? null}
      </Flex>
    </Flex>
  )
}