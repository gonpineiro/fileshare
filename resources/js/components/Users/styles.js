import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 10px;
    padding: 15px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
  }
`
export const GridTable = styled.div`
    padding: 10px;
    display: grid;
    grid-template-rows: 50px 1fr;  
`

export const RowGrid = styled.div`
    display: grid;
    grid-gap: 10px;
    padding: 10px;
    justify-content: right;
    align-content: space-between;
    grid-template-columns: 2fr 1fr;
`

export const TitleTable = styled.h4`
    align-self: center;
    margin-left: 5px;
`


