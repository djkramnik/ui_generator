import {
  createGlobalStyle,
} from 'styled-components'

import { colors, type Theme } from '../components/theme'

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
      white: '#fff',
      grey: 'rgb(146,146,146)',
    },
    spacing: {
      containerWidth: ['96%', '94%', '92%']
    },
    components: {
      heading: {
        margin: '0',
      },
      h1: {
        fontSize: '94px',
        lineHeight: '97px',
        fontWeight: 'bold'
      },
      h2: {
        fontSize: '56px',
        lineHeight: '64px',
        fontWeight: 'bold'
      },
      h3: {
        fontSize: '30px',
        fontWeight: 'bold',
      },
      h4: {
        fontSize: '22px',
      },
      h5: {
        fontSize: '18px'
      },
      select: {
        outline: 'none',
        appearance: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        padding: '9px 6px',
        borderRadius: '0.25rem',
        fontWeight: '400',
        border: '2px solid rgba(0, 0, 0, 0.6)',
      },
      option: {
        padding: '9px 6px',
      },
      input: {
        padding: '9px 18px',
      }
    }
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
      white: '#fff',
      grey: '#eee'
    },
    spacing: {
      containerWidth: ['98%', '96%', '94%']
    },
    components: {
      heading: {
        margin: '0',
      },
      h1: {
        fontSize: '56px',
        lineHeight: '64px',
        fontWeight: 'bold'
      },
      h2: {
        fontSize: '56px',
        lineHeight: '64px',
        fontWeight: 'bold'
      },
      h3: {
        fontSize: '30px',
        fontWeight: 'bold',
      },
      h4: {
        fontSize: '22px',
      },
      h5: {
        fontSize: '18px'
      },
      select: {
        outline: 'none',
        appearance: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        padding: '9px 6px',
        borderRadius: '0.25rem',
        fontWeight: '400',
        border: '2px solid rgba(0, 0, 0, 0.6)',
      },
      option: {
        padding: '9px 6px',
      },
      input: {
        padding: '9px 18px',
      }
    },
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
      white: '#fff',
      grey: colors.gsapGrey
    },
    spacing: {
      containerWidth: '96%'
    },
    components: {
      heading: {
        margin: '0',
      },
      h1: {
        fontSize: '56px',
        lineHeight: '64px',
        fontWeight: 'bold'
      },
      h2: {
        fontSize: '56px',
        lineHeight: '64px',
        fontWeight: 'bold'
      },
      h3: {
        fontSize: '30px',
        fontWeight: 'bold',
      },
      h4: {
        fontSize: '22px',
      },
      h5: {
        fontSize: '18px'
      },
      select: {
        outline: 'none',
        appearance: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        padding: '9px 6px',
        borderRadius: '0.25rem',
        fontWeight: '400',
        border: '2px solid rgba(0, 0, 0, 0.6)',
      },
      option: {
        padding: '9px 6px',
      },
      input: {
        padding: '9px 18px',
      }
    },
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