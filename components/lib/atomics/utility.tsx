export const FitContent = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  if (!children) {
    return null
  }
  return (
    <div style={{ width: 'fit-content'}}>
      {children}
    </div>
  )
}