import styled, { css } from 'styled-components'
import { sumImparNumber } from '../../js/funciones'

export const gridDistribution = (type) => {
  if (type === 'tabla') return css `grid-template-columns: 1fr;`

  if (type === 'editar' || type === 'editar' || 'crear' || 'asociar') {
    return css `grid-template-columns: 2fr 1fr;`
  }
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
`

export const Title = styled.h4`
  height: 100%;
  margin: 0;
  text-justify: center;
`

export const FormGrid = styled.div`
  display: ${({ type }) => type === 'tabla' ? 'none' : 'grid'};      
  grid-template-rows: 50px 1fr;
  border: 0.5px solid rgba(197, 199, 196, .5);
  border-radius: 5px;
`
export const Form = styled.form`
  padding: 20px;
  display: grid;
  grid-gap: 30px 0px;
  grid-template-rows: repeat(${({ grid }) => grid}, 40px);
`

export const DivButton = styled.div`
  display: grid;
  padding: 5px;
  grid-gap: 0px 15px;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
`

export const DivOptions = styled.div`
  display: grid;
  grid-gap: 0px 15px;
  grid-template: 35px / repeat(2, 1fr);
  align-content: center;
  > .options{
    width: 100%;
    margin: 0;
  }
`
export const FormAsociar = styled.form`
  padding: 20px;
  display: grid;
  grid-gap: 10px 0px;
  align-content: center;  
  grid-template: repeat(${ ({ grid }) => sumImparNumber(grid) + 1}, 20px) / repeat(2, 1fr);
  > .options{
    width: 100%;
    margin: 0;
  }
  >.divbutton {    
    grid-row-start: 7;
    grid-column: span 2;    
  }
`

export const ListItemFile = styled.div`
  display: grid;
  grid-template: 20px 20px / 40px 1fr;
  grid-gap: 0 10px;
  grid-template-areas: 
    "listItem titleItem"
    "listItem descriptionItem";
  >.listItem {
    grid-area: listItem
  }
  >.titleItem {
    grid-area: titleItem
  }
  >.descriptionItem {
    grid-area: descriptionItem
  }
`
export const ListTittle = styled.h3`
  height: 100%;
  margin: 0;
  font-size: 1rem;
  justify-self: left;
`

export const ListDescription = styled.h3`
  height: 100%;
  margin: 0;
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.54);
  justify-self: left;
`
