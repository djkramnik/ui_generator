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
    // youtube
    palette: {
      background: '#fff',
      copy: '#0f0f0f',
      heading: '#212121',
      primary: '#3f51b5',
      secondary: '#c5cae9',
      error: '#dd2c00',
      success: '#303f9f',
    },
    spacing: {
      containerWidth: ['96%', '94%', '92%']
    },
    components: {}
  },
  alt: {
    typography: {
      primaryff: 'Roboto',
      secondaryff: 'Montserrat'
    },
    // crave
    palette: {
      background: 'rgb(22, 22, 22)',
      copy: 'rgb(174, 174, 174)',
      heading: '#fff',
      primary: '#00c1f3',
      secondary: '#aeaeae',
      error: '#dc3545',
      success: '#28a745',
    },
    spacing: {
      containerWidth: ['98%', '96%', '94%']
    },
    components: {},
  },
  tertiary: {
    typography: {
      primaryff: 'Montserrat',
      secondaryff: 'Roboto',
    },
    // itch.io
    palette: {
      background: '#eeeeee',
      copy: '#222222',
      heading: '#222222',
      primary: '#fa5c5c',
      secondary: '#e54747',
      error: '#dc3545',
      success: '#28a745',
    },
    spacing: {
      containerWidth: '96%'
    },
    components: {},
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