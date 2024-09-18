import {
  createGlobalStyle,
} from 'styled-components'

import type { Theme } from '../components/theme'

export const themes: Record<string, Theme> = {
  primary: {
    typography: {
      primaryff: 'Noto Sans, sans-serif',
      secondaryff: 'helveticaneue'
    },
    spacing: {
      containerWidth: ['96%', '94%', '92%']
    }
  },
  alt: {
    typography: {
      primaryff: 'Roboto',
      secondaryff: 'Montserrat'

    },
    spacing: {
      containerWidth: ['98%', '96%', '94%']
    }
  },
  tertiary: {
    typography: {
      primaryff: 'Montserrat',
      secondaryff: 'Roboto',
    },
    spacing: {
      containerWidth: '96%'
    }
  }
}

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  * {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.typography?.primaryff ?? 'fantasy'};
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    outline: none;
    background: none;
    border: none;
  }
`