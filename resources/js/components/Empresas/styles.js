import styled, { css } from 'styled-components'

export const gridDistribution = (type) =>{
  if (type === 'tabla') return css `grid-template-columns: 1fr;`
  if (type === 'editar' || type === 'editar' || 'crear') return css `grid-template-columns: 2fr 1fr;` 
}

export const Container = styled.div`
  display: grid;
  ${props => gridDistribution(props.type)}
  grid-gap: 10px;
  padding: 15px;
  @media (max-width: 768px) {
      grid-template-columns: 1fr;
  }
`
export const GridTable = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  border: 0.5px solid rgba(197, 199, 196, .5);
  border-radius: 5px;
`

export const RowGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 10px;
  grid-template-columns: 2fr 1fr;
  align-self: center;
  background: rgba(197, 199, 196, .2);
  >.link {
    justify-self: right;
  }
`

export const Title = styled.h4`
  height: 100%;
  margin: 0;
`

export const FormGrid = styled.div`
  display: ${({type}) => type === 'tabla' ? 'none' : 'grid'};    
  grid-template-rows: 50px 1fr;
  border: 0.5px solid rgba(197, 199, 196, .5);
  border-radius: 5px;
`
export const Form = styled.form`
  padding: 20px;
  display: grid;
  grid-gap: 30px 0px;
  grid-template-rows: repeat(5, 40px);
`

export const DivButton = styled.div`
  display: grid;
  padding: 5px;
  grid-gap: 0px 15px;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
`
