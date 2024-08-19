import { CSSProperties } from "react"

export type BreakpointsType = {
  phonesm: string
  phonelg: string
  tabletsm: string
  tabletlg: string
  desktoplg: string
}

// [<= phonelg, > phonelg, > tabletlg?]
export type MixinList<T extends string = string>
  = [T, T, T?]
// [<= phonesm, > phonesm, > phonelg, > tabletsm, > tabletlg, > desktoplg?]
export type FineGrainedMixinList<T extends string = string>
  = [T, T, T, T, T, T?]

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
  palette: Record<string, CssProps>
  typography: Record<string, CssProps>
  spacing: Record<string, CssProps>
  components: Record<string, CssProps>
}

export type Theme = Partial<ThemeConfig>

export type ThemeableComponent<
E extends React.ElementType<any>> =
  & React.ComponentPropsWithoutRef<E>
  & {
    $sx?: CssProps
    $variant?: string | string[]
  }

export type WithTheme<T> = T & { theme: Theme }