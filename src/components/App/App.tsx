import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../../styles/GlobalStyles'
import theme from '../../styles/Theme'
import MetricItem from '../MetricItem/MetricItem'

import * as Styled from './App.style'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Styled.SectionContainer>
        <Styled.ResponsiveContainer>
          <Styled.ContentLogo duration="700ms" delay="0ms">
            2021년 12월 기준
          </Styled.ContentLogo>

          <Styled.MetricsContainer duration="700ms" delay="100ms">
            <MetricItem
              duration={2000}
              endNumber={700}
              boldContent="만 명"
              normalContent="의 여행자"
            />
            <MetricItem
              duration={2000}
              endNumber={100}
              boldContent="만 개"
              normalContent="의 여행 리뷰"
            />
            <MetricItem
              duration={2000}
              endNumber={470}
              boldContent="만 개"
              normalContent="의 여행 일정"
            />
          </Styled.MetricsContainer>

          <Styled.AwardsContainer duration="700ms" delay="200ms">
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
        </Styled.ResponsiveContainer>
      </Styled.SectionContainer>
    </ThemeProvider>
  )
}

export default App
