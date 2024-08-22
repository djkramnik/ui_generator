import { Card, Flex } from "../layout"
import { TwoCol } from "../layout/twocol"

export const Testimonial = ({
  imgSrc,
  name,
  position,
  testimony,
  portrait = true
}: {
  imgSrc: string,
  name: string,
  position: string,
  testimony: string
  portrait?: boolean
}) => {
  return (
    <Card>
      <Flex col $sx={{ gap: '12px' }}>
        <TwoCol growRight widthLeft="20%" hGap="12px">
          <img src={imgSrc}
            style={{
              borderRadius: portrait ? '50%' : 'initial'
            }}
          />
          <Flex col ass jcc $sx={{ height: '100%', gap: '8px'}}>
            <h3 style={{ margin: 0 }}>{name}</h3>
            <p style={{ margin: 0 }}>{position}</p>
          </Flex>
        </TwoCol>
        <p style={{ margin: '0' }}>
          {testimony}
        </p>
      </Flex>
    </Card>
  )
}