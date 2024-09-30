import {
  createGlobalStyle,
} from 'styled-components'

import { colors, getSuperComponents, ResponsiveMixin, shadows, type Theme } from '../components/theme'
import { getComponents } from '../components/theme'
const palette = {
  background: '#fff',
  copy: '#0f0f0f',
  heading: '#212121',
  primary: '#3f51b5',
  button: '#fff',
  secondary: '#c5cae9',
  error: '#dd2c00',
  success: '#303f9f',
  white: '#fff',
  grey: '#eee',
  inactive: 'rgba(0,0,0,0.3)'
}

const typography = {
  primaryff: 'Noto Sans, sans-serif',
  secondaryff: 'helveticaneue'
}

const spacing = {
  containerWidth: ['96vw', '94vw', '92vw'] as ResponsiveMixin<string>,
  containerMargins: ['2vw', '3vw', '4vw'] as ResponsiveMixin<string>,
  smallGap: '6px',
  gap: '12px',
  biggishGap: '20px',
  bigGap: '40px',
}

export const themes: Record<string, Theme> = {
  primary: {
    typography,
    palette,
    spacing,
    components: getComponents({
      typography,
      palette,
      components: {}
    }),
    superComponents: getSuperComponents({ palette })
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
    background-color: ${({ theme }) => theme.palette?.background}
  }

  a {
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

  input::placeholder {
    color: currentColor;
  }
`