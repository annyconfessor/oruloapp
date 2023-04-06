import React from 'react'
import styled from 'styled-components'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

import {
  Wrapper,
  Image,
  Content,
  Header,
  Title,
  Subtitle,
  Details,
  About,
  AboutItem,
  Pricing,
  PricingItem
} from './styles.tsx'

const FavoriteWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 .5rem;
`

const Card = ({ isFavorite, handleFavorite, data }) => {
  const FavoriteElement = isFavorite ? AiFillHeart : AiOutlineHeart

  return (
    <Wrapper>
      <Image alt="figure" src={data.default_image['200x140']} />
      <Content>
        <Header>
          <Title>{data.name}</Title>
          <Subtitle>{`${data.address?.area}, ${data.address?.city}`}</Subtitle>
        </Header>
        <Details>
          <About>
            <AboutItem>{`${data.max_area} m²`}</AboutItem>
            <AboutItem>{`${data.max_bedrooms} quarto(s)`}</AboutItem>
            <AboutItem>{`${data.max_suites} suite(s)`}</AboutItem>
            <AboutItem>{`${data.min_parking} vaga(s)`}</AboutItem>
          </About>
          <Pricing>
            <PricingItem>A partir de<br/></PricingItem>
            <PricingItem>{`R$ ${data.min_price}`}</PricingItem>
            <PricingItem>{`R$ ${data.price_per_private_square_meter} m²`}</PricingItem>
          </Pricing>
        </Details>
        <FavoriteWrapper>
          <FavoriteElement color="red" size="1.5rem" title="favorite-btn" onClick={() => handleFavorite(data.id)} />
        </FavoriteWrapper>
      </Content>
    </Wrapper>
  )
}

export default Card
