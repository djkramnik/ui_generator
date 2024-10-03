import { Card } from "./card"
import { AvatarProps, MyAvatar } from "./avatar"
import { Flex } from "../layout"
import { Copy } from "../atomics"
import { getSuperComponentStyles } from "../../theme"
import { useTheme } from "styled-components"

type TestimonialProps = AvatarProps & {
  testimonial: string
  grey?: boolean
}

export const Testimonial = ({
  testimonial,
  grey,
  ...rest
}: TestimonialProps) => {
  const theme = useTheme()
  return (
    <Card grey={grey}>
      <Flex col $sx={{
        ...getSuperComponentStyles(
          'testimonialContainer',
          theme
        )
      }}>
        <MyAvatar {...rest} />
        <Copy>
          {testimonial}
        </Copy>
      </Flex>
    </Card>
  )
}