import { CSSProperties } from "react"

export type BreakpointsType = {
  phonesm: null // this is pointless? based on current impl.  It just means a style with no minimum viewport width to apply
  phonelg: string
  tabletsm: string
  tabletlg: string
  desktoplg: string
}

// [<= phonelg, > phonelg, > tabletlg?]
export type MixinList<T extends string = string>
  = [T, T, T?]
// [<= phonelg, > phonelg, > tabletsm, > tabletlg, > desktoplg?]
export type FineGrainedMixinList<T extends string = string>
  = [T, T, T, T, T?]

// ways of specifiying a single responsive style on a component
export type ResponsiveMixin<T extends string = string> =
  | T // applies at all breakpoints
  | MixinList<T>
  | FineGrainedMixinList<T>
  | Partial<Record<keyof BreakpointsType, string>> 

export type ResponsiveMixinProps<T extends CSSProperties> = {
  [key in keyof T]?: ResponsiveMixin
}

export type CssProps = ResponsiveMixinProps<CSSProperties>

export type ThemeConfig = {
  palette: Record<string, ResponsiveMixin>
  typography: Record<string, ResponsiveMixin>
  spacing: Record<string, ResponsiveMixin>
  components: Record<string, ResponsiveMixin>
}

export type Theme = Partial<ThemeConfig>

export type ResponsiveComponent<
E extends React.ElementType<any>> =
  & React.ComponentPropsWithoutRef<E>
  & {
    $sx?: CssProps
    $variant?: string | string[]
  }

export type WithTheme<T> = T & { theme: Theme }