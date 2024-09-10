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
      <Flex col gap="12px" {...flexProps}
        $sx={{ ...flexProps?.$sx }}>
        {children}
      </Flex>
    </form>
  )
}