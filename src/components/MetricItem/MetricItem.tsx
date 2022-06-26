import { useEffect, useRef, useState } from 'react'

import { easeOutExpo } from '../../utils/animation'

import * as Styled from './MetricItem.style'

interface MetricItemType {
  duration: number
  endNumber: number
  boldContent: string
  normalContent: string
}

function MetricItem({
  endNumber,
  duration,
  boldContent,
  normalContent,
}: MetricItemType) {
  const [count, setCount] = useState(0)
  const requestAnimationFrameRef = useRef(0)

  useEffect(() => {
    const animationHandler = (progress = 0) => {
      setCount(Math.ceil(endNumber * easeOutExpo(progress)))

      if (progress >= 1) {
        cancelAnimationFrame(requestAnimationFrameRef.current)
        return
      }

      requestAnimationFrameRef.current = requestAnimationFrame((timestamp) =>
        animationHandler(timestamp / duration),
      )
    }
    requestAnimationFrameRef.current = requestAnimationFrame(() =>
      animationHandler(0),
    )

    return () => cancelAnimationFrame(requestAnimationFrameRef.current)
  }, [])

  return (
    <Styled.Container>
      <strong>
        <span>{count}</span>
        {boldContent}
      </strong>
      {normalContent}
    </Styled.Container>
  )
}

export default MetricItem
