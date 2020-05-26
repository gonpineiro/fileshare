import React from 'react';
import { connect } from 'react-redux'
import MenuRow from '../General/MenuRow';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import AddIcon from '@material-ui/icons/Add';

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
      <td>{cliente.cuil}</td>
      <td>{cliente.domicilio}</td>
      <td>{cliente.telefono}</td>
      <td>{cliente.user.name}</td>
      <td>{cliente.empresa.rs}</td>
    </tr>
  ))

  return (
    <div className="card transparent">
      <div className="card-margin">
        <div className="row mt-2">
          <div className="col col-md-6 text-izquierda">
            <h4>
              Lista de clientes
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
              <th>Usuario</th>
              <th>Empresa</th>
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
  return reducers.clientesReducer
}

export default connect(mapStateToProps, clientesActions)(Table);
