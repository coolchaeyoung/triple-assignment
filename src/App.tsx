import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/GlobalStyles'
import theme from './styles/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
