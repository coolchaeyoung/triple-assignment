import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../../styles/GlobalStyles'
import theme from '../../styles/Theme'

import { ContentLogo } from './App.style'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContentLogo>2021년 12월 기준</ContentLogo>
    </ThemeProvider>
  )
}

export default App
