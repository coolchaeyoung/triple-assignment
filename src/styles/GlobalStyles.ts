import styled, { createGlobalStyle, css, keyframes } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    body {
        font-family: sans-serif;
    }
`

const fadeInMoveUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(10%)
    }
    to {
        opacity: 1;
        transform: translateY(0%);
    }
`

const animation = (duration: string, delay: string) => css`
  ${fadeInMoveUp} ${duration} ${delay} forwards;
`

export const FadeInMoveUpContainer = styled.div<{
  duration: string
  delay: string
}>`
  opacity: 0;
  animation: ${(props) => animation(props.duration, props.delay)};
`
