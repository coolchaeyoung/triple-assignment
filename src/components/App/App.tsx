import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../../styles/GlobalStyles'
import theme from '../../styles/Theme'

import * as Styled from './App.style'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Styled.ContentLogo>2021년 12월 기준</Styled.ContentLogo>

      <Styled.AwardsContainer>
        <Styled.AwardItem imgUrl="/images/play-store2x.png">
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </Styled.AwardItem>
        <Styled.AwardItem imgUrl="/images/badge-apple4x.png">
          2018 애플 앱스토어
          <br />
          오늘의 여행앱 선정
        </Styled.AwardItem>
      </Styled.AwardsContainer>
    </ThemeProvider>
  )
}

export default App
