import React from 'react';
import { connect } from 'react-redux'
import MenuRow from '../General/MenuRow';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import AddIcon from '@material-ui/icons/Add';

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
    <div className="card transparent">
      <div className="card-margin">
        <div className="row mt-2">
          <div className="col col-md-6 text-izquierda">
            <h4>
              Lista de empresas
              {state_form === 'tabla' ? <AddIcon fontSize="large" className="link" onClick={traerFormulario} /> : ''}
            </h4>
          </div>
          <div className="col col-md-6 text-derecha">
            <KeyboardReturnIcon fontSize="large" onClick={goBack} className="link" />
          </div>
        </div>
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
      </div>
    </div>
  );
}

const mapStateToProps = (reducers) => {
  return reducers.empresasReducer
}

export default connect(mapStateToProps, empresasActions)(Table);
