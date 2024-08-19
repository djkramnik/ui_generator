import 'styled-components'

type Theme = import('./index').Theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme{}
}

