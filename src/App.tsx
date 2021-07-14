import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Layout from './components/Layout'
import darkTheme from './styles/themes/dark'
// import lightTheme from './styles/themes/light'
import { ThemeProvider } from 'styled-components'
import Dashboard from './pages/Dashboard'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  )
}
