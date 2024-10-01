export const Fullscreen = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  return (
    <section style={{
      width: '100vw',
      minHeight: '100vh',
      position: 'relative'
    }}>
      {children}
    </section>
  )
}