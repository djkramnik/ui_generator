import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { themes, GlobalStyles } from '../styles/index'
import { ActiveThemeContext } from '../components/active_theme'

export default class MyApp extends App<
  {},
  {},
  {
    activeTheme: string
    toggleTheme: (activeTheme: string) => void
  }
> {
  toggleTheme: (activeTheme: string) => void

  constructor(props: any) {
    super(props)
    this.toggleTheme = (activeTheme: string) => {
      this.setState({
        activeTheme,
      })
    }
    this.state = {
      activeTheme: 'primary',
      toggleTheme: this.toggleTheme,
    }
  }
  render() {
    const { Component, pageProps } = this.props

    return (
      <ActiveThemeContext.Provider value={this.state}>
        <ThemeProvider theme={themes[this.state.activeTheme]}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
            />
          </Head>
          <GlobalStyles theme={themes[this.state.activeTheme]}/>
          <Component {...pageProps} />
        </ThemeProvider>
      </ActiveThemeContext.Provider>
    )
  }
}
