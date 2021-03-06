import styled from 'styled-components'

import { FadeInMoveUpContainer } from '../../styles/GlobalStyles'

export const SectionContainer = styled.section`
  min-width: 1200px;
  display: flex;
  justify-content: center;
`

export const ResponsiveContainer = styled.div``

export const ContentLogo = styled(FadeInMoveUpContainer)`
  padding-top: 280px;
  position: absolute;
  top: 150px;
  height: 338px;
  width: 400px;
  height: 338px;
  font-size: 15px;
  color: ${({ theme }) => theme.grayColor2};
  text-align: center;
  box-sizing: border-box;

  background-image: url('/images/triple2x.png');
  background-repeat: no-repeat;
  background-size: 400px 338px;
  background-position: center;
`

export const MetricsContainer = styled(FadeInMoveUpContainer)`
  margin-left: 623px;
  padding-top: 150px;
`

export const AwardsContainer = styled(FadeInMoveUpContainer)`
  margin: 50px 0px 140px 623px;
  display: flex;
  gap: 39px;
  white-space: nowrap;
`

export const AwardItem = styled.div<{ imgUrl: string }>`
  padding: 5px 0 5px 62px;
  position: relative;
  height: 54px;
  color: ${({ theme }) => theme.grayColor3};
  line-height: 22px;
  font-size: 14px;
  font-weight: 700;

  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: 54px 54px;
`
