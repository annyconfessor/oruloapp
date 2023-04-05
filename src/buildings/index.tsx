import React from 'react'
import styled from 'styled-components'

import useBuildings from '../state/buildings.tsx'

import Card from './Card.tsx'
import AboutPagination from './AboutPagination.tsx'
import Pagination from './Pagination.tsx'

const Wrapper = styled.div`
  padding: 2rem;
`

const BuildingCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(1fr);
  grid-gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const Buildings = () => {
  const { isLoading, buildings, meta, setPage } = useBuildings()

  if (isLoading) return <p>Carregando...</p>
  if (!buildings.length) return <p>Sem resultados.</p>

  return (
    <Wrapper>
      <AboutPagination data={meta} />
      <BuildingCards>
        {buildings.map((item) => <Card key={item.id} data={item} />)}
      </BuildingCards>
      <Pagination
        currentPage={meta.page}
        totalPages={meta.total_pages}
        setPage={setPage}
      />
    </Wrapper>
  )
}

export default Buildings
