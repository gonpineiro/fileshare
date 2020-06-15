import React from 'react';
import { connect } from 'react-redux'
import MenuRow from '../General/MenuRow';
import { GridTable, RowGrid, Title } from '../styles/styles'
import { ReturnIcon, Add, Check } from '../General/SvgIcons';

import * as doctypesActions from '../../actions/doctypesActions'

const Table = (props) => {
  const { doctypes, goBack, state_form, traerFormulario } = props

  const addRow = () => doctypes.map((doctype, key) => (
    <tr key={key}>
      <td>{doctype.id}</td>
      <td>{
        <MenuRow
          props={props}
          data={doctype}
          linkClientes={true}
        />
      }
      </td>
      <td>{doctype.tipo === 1 ? 'Mensual' : 'Anual'}</td>
      <td className="display-none"><Check display={!doctype.obligatorio ? 'none' : ''} /></td>
      <td className="display-none"><Check display={!doctype.estado ? 'none' : ''} /></td>
    </tr>
  ))

  return (
    <GridTable >
      <RowGrid >
        <Title>
          Tipos de documentos
          <Add traerFormulario={traerFormulario} display={state_form !== 'tabla' ? 'none' : ''} />
        </Title>
        <ReturnIcon goBack={goBack} />
      </RowGrid>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Requerido</th>
            <th className="display-none">Obligatorio</th>
            <th className="display-none">Estado</th>
          </tr>
        </thead>
        <tbody>
          {addRow()}
        </tbody>
      </table>
    </GridTable>
  );
}

const mapStateToProps = (reducers) => reducers.doctypesReducer

export default connect(mapStateToProps, doctypesActions)(Table);
