import Script from 'next/script'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { themes, GlobalStyles } from '../styles/index'
import { ActiveThemeContext } from '../components/active_theme'
import { Theme } from '../components/theme/styled'

export default class MyApp extends App<
  {},
  {},
  {
    activeTheme: Theme
    toggleTheme: (newTheme: Theme) => void
  }
> {
  toggleTheme: (newTheme: Theme) => void

  constructor(props: any) {
    super(props)
    this.toggleTheme = (newTheme: Theme) => {
      this.setState({
        activeTheme: newTheme,
      })
    }
    this.state = {
      activeTheme: themes['primary'],
      toggleTheme: this.toggleTheme,
    }
  }
  render() {
    const { Component, pageProps } = this.props

    return (
      <ActiveThemeContext.Provider value={this.state}>
        <ThemeProvider theme={this.state.activeTheme}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
            />
          </Head>
          <GlobalStyles theme={this.state.activeTheme}/>
          <Component {...pageProps} />
          <Script src="https://kit.fontawesome.com/8624cac04a.js" crossOrigin="anonymous" />
        </ThemeProvider>
      </ActiveThemeContext.Provider>
    )
  }
}
