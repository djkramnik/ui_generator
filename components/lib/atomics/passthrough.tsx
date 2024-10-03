// the purpose of this is to sometimes randomly omit certain components
// but not to omit their children. i.e we want to randomly omit
// input labels
export const Noop = ({
  children,
}: {
  children?: React.ReactNode
} & {[key: string]: any}) => {
  return children
}