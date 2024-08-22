import {
  createGlobalStyle,
} from 'styled-components'

import type { Theme } from '../components/theme'

export const themes: Record<string, Theme> = {
  primary: {
    typography: {
      primary: {
        fontFamily: 'Tinos'
      }
    }
  },
  alt: {
    typography: {
      primary: {
        fontFamily: 'courier'
      }
    }
  }
}

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  * {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.typography?.primary?.fontFamily ?? 'fantasy'};
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
  }
`