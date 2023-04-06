import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);
  border-radius: 8px;
  overflow: hidden;
  transition: all ease-in-out .2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  }
`

export const Image = styled.img`
${({ width, height }) => css`
  width: ${width ? `${width}px` : `100%`};
  height: ${height ? `${height}px` : `100%`};
`}
  object-fit: cover;
`

export const Content = styled.div`
  padding: .5rem 1rem;
`

export const Header = styled.div``

export const Title = styled.h2``

export const Subtitle = styled.h3``

export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: .5rem;
  padding: .5rem 0;
`

export const About = styled.ul``

export const AboutItem = styled.li``

export const Pricing = styled.ul``

export const PricingItem = styled.li``

export const Like = styled.div`
  width: 200px;
  display: flex;
  justify-content: end;
`

export const Heart = styled.div`
  margin-left: 20px;
`

export const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer; 
`