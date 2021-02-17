import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import AppHeader from '@/components/AppHeader'
import { setConfiguration } from 'react-grid-system'
import AppFooter from '@/components/AppFooter'

setConfiguration({ maxScreenClass: 'xl', gridColumns: 12 })

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppHeader />
      <Component {...pageProps} />
      <GlobalStyle />
      <AppFooter />
    </ThemeProvider>
  )
}

export default MyApp
