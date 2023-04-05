import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
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

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Content = styled.div`
  padding: .5rem;
`

const Header = styled.div``

const Title = styled.h2``

const SubTitle = styled.h3``

const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: .5rem;
  padding: .5rem 0;
`

const About = styled.ul``

const AboutItem = styled.li``

const Pricing = styled.div``

const Card = ({ data }) => {
  return (
    <Wrapper>
      <Image alt="figure" src={data.default_image['200x140']} />
      <Content>
        <Header>
          <Title>{data.name}</Title>
          <SubTitle>{`${data.address?.area}, ${data.address?.city}`}</SubTitle>
        </Header>
        <Details>
          <About>
            <AboutItem>{`${data.max_area} m²`}</AboutItem>
            <AboutItem>{`${data.max_bedrooms} quarto(s)`}</AboutItem>
            <AboutItem>{`${data.max_suites} suite(s)`}</AboutItem>
            <AboutItem>{`${data.min_parking} vaga(s)`}</AboutItem>
          </About>
          <Pricing>
            <h3>A partir de<br/></h3>
            <h3>{`R$ ${data.min_price}`}</h3>
            <h3>{`R$ ${data.price_per_private_square_meter} m²`}</h3>
          </Pricing>
        </Details>
      </Content>
    </Wrapper>
  )
}

export default Card
