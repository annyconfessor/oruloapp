import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`

const Button = styled.button`
  background: transparent;
  border: 1px solid #CCC;
  border-radius: 4px;
  margin: 0 .2rem;
  cursor: pointer;

  ${({ active }) => active ? `background: #EEE;` : ''}

  &:hover {
    background: #EEE;
  }
`

const Pagination = ({ currentPage, totalPages, setPage }) => {
  return (
    <Wrapper>
      <Button onClick={() => currentPage > 1 ? setPage(currentPage - 1) : null}>Anterior</Button>
      {[1, 2, 3, 4, 5].map((item) => (
        <Button key={item} onClick={() => setPage(item)} active={item === currentPage}>{item}</Button>
      ))}
      <Button onClick={() => currentPage < totalPages ? setPage(currentPage + 1) : null}>Proximo</Button>
    </Wrapper>
  )
}

export default Pagination
