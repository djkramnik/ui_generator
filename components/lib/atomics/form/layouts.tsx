import { Flex, FlexProps } from "../../layout"

// 
export const SimpleForm = ({
  children,
  flexProps,
}: {
  children?: React.ReactNode
  flexProps?: FlexProps
}) => {
  return (
    <form>
      <Flex col {...flexProps}
        $sx={{ gap: '12px', ...flexProps?.$sx }}>
        {children}
      </Flex>
    </form>
  )
}