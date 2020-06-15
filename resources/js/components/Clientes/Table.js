import React from 'react';
import { connect } from 'react-redux'
import MenuRow from '../General/MenuRow';
import { GridTable, RowGrid, Title } from '../styles/styles'
import { ReturnIcon, Add } from '../General/SvgIcons';

import * as clientesActions from '../../actions/clientesActions'

const Table = (props) => {
  const { clientes, goBack, state_form, traerFormulario } = props

  const addRow = () => clientes.map((cliente, key) => (
    <tr key={key}>
      <td>{cliente.id}</td>
      <td>{
        <MenuRow
          props={props}
          data={cliente}
        />
      }
      </td>
      <td className="display-none">{cliente.cuil}</td>
      <td className="display-none">{cliente.domicilio}</td>
      <td className="display-none">{cliente.telefono}</td>
      <td>{cliente.user.name}</td>
      <td>{cliente.empresa.rs}</td>
    </tr>
  ))

  return (
    <GridTable >
      <RowGrid >
        <Title>
          Lista de clientes
          <Add traerFormulario={traerFormulario} display={state_form !== 'tabla' ? 'none' : ''} />
        </Title>
        <ReturnIcon goBack={goBack} />
      </RowGrid>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Razón Social</th>
            <th className="display-none">CUIL</th>
            <th className="display-none">Domicilio</th>
            <th className="display-none">Teléfono</th>
            <th>Usuario</th>
            <th>Empresa</th>
          </tr>
        </thead>
        <tbody>
          {addRow()}
        </tbody>
      </table>
    </GridTable>
  );
}

const mapStateToProps = (reducers) => {
  return reducers.clientesReducer
}

export default connect(mapStateToProps, clientesActions)(Table);
