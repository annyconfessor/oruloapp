import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

const Element = styled.span``

const Loading = ({ active }) => {
  if (!active) return null

  return (
    <Wrapper>
      <Element>Loading...</Element>
    </Wrapper>
  )
}

export default Loading
