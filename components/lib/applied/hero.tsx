import { Box } from "../layout"

export const VideoHero = ({
  videoSrc,
  children,
}: {
  videoSrc: string
  children?: React.ReactNode
}) => {
  return (
    <Box $sx={{
      backgroundImage: `url(${videoSrc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '600px',
      height: '100vh',
      position: 'relative'
    }}>
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }} />
      {children}
    </Box>
  )
}