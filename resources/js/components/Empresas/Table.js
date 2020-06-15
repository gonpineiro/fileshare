import React from 'react';
import { connect } from 'react-redux'
import MenuRow from '../General/MenuRow';
import AddIcon from '@material-ui/icons/Add';
import { GridTable, RowGrid, Title } from './styles'
import { ReturnIcon } from '../General/SvgIcons';

import * as empresasActions from '../../actions/empresasActions'

const Table = (props) => {
  const { empresas, goBack, state_form, traerFormulario } = props

  const addRow = () => empresas.map((empresa, key) => (
    <tr key={key}>
      <td>{empresa.id}</td>
      <td>{
        <MenuRow
          props={props}
          data={empresa}
        />
      }
      </td>
      <td>{empresa.cuil}</td>
      <td>{empresa.domicilio}</td>
      <td>{empresa.telefono}</td>
    </tr>
  ))

  return (
    <GridTable >
      <RowGrid >
        <Title>
          Lista de empresas
              {state_form === 'tabla' ? <AddIcon fontSize="large" className="link" onClick={traerFormulario} /> : ''}
        </Title>
        <ReturnIcon goBack={goBack} />
      </RowGrid>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Razón Social</th>
            <th>CUIL</th>
            <th>Domicilio</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {addRow()}
        </tbody>
      </table>
    </GridTable>
  );
}

const mapStateToProps = (reducers) => reducers.empresasReducer

export default connect(mapStateToProps, empresasActions)(Table);
