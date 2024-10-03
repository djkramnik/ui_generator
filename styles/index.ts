import { createGlobalStyle } from 'styled-components'

import {
  getSuperComponents,
  ResponsiveMixin,
  type Theme,
} from '../components/theme'
import { getComponents } from '../components/theme'
const palette = {
  background: '#fff',
  copy: '#0f0f0f',
  heading: '#212121',
  primary: '#3f51b5',
  button: '#fff',
  secondary: '#c5cae9',
  error: 'rgb(224, 40, 40)',
  success: 'rgb(129, 182, 76)',
  white: '#fff',
  grey: '#eee',
  inactive: 'rgba(0,0,0,0.3)',
}

const typography = {
  primaryff: 'Noto Sans, sans-serif',
  secondaryff: 'helveticaneue',
}

const spacing = {
  containerWidth: ['96%', '94%', '92%'] as ResponsiveMixin<string>,
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
      components: {},
    }),
    superComponents: getSuperComponents({ palette }),
  },
}

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: ${({ theme }) => theme.typography?.primaryff ?? 'fantasy'};
    font-display: optional;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.palette?.background};
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

  @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .rotating {
    -webkit-animation: rotating 2s linear infinite;
    -moz-animation: rotating 2s linear infinite;
    -ms-animation: rotating 2s linear infinite;
    -o-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
    transform-origin: center;
    width: fit-content;
    height: fit-content;
  }
`
