import React from 'react'
import styled from 'styled-components'

const Content = styled.div``

const AboutPagination = ({ data }) => (
  <Content>
    Exibindo {data.page === 1 ? data.page : (data.page - 1) * 10 + 1} - {data.page * 10 < data.total ? data.page * 10 : data.total} de {data.total}
  </Content>
)

export default AboutPagination
