// non svg logos go here for now

import { CSSProperties } from "styled-components"

export const AmazonPrimeLogo = ({
  styleFirst,
  styleSecond,
}: {
  styleFirst?: CSSProperties
  styleSecond?: CSSProperties
}) => {
  return (
    <>
      <span 
        style={{
          backgroundImage: `url(/logos/amazonlogos.png)`,
          backgroundSize: '350px',
          backgroundRepeat: 'repeat-x',
          backgroundPositionX: '-10px',
          backgroundPositionY: '-51px',
          width: '97px',
          height: '30px',
          ...styleFirst,
        }}
      />
      <span
        style={{
          backgroundImage: `url(/logos/amazonlogos.png)`,
          backgroundSize: '350px',
          backgroundPosition: '-160px -10px',
          width: '45px',
          height: '17px',
          position: 'relative',
          left: '-20px',
          top: '10px',
          ...styleSecond,
        }}
      />
    </>
  )
}