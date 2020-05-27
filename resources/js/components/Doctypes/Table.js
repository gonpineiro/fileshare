import React from 'react';
import { connect } from 'react-redux'
import MenuRow from '../General/MenuRow';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import AddIcon from '@material-ui/icons/Add';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

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
        />
      }
      </td>
      <td>{doctype.tipo === 1 ? 'Mensual' : 'Anul'}</td>
      <td>{doctype.obligatorio ? <CheckCircleIcon fontSize="small"  /> : ''}</td>
      <td>{doctype.estado ? <CheckCircleIcon fontSize="small"  /> : ''}</td>
    </tr>
  ))

  return (
    <div className="card transparent">
      <div className="card-margin">
        <div className="row mt-2">
          <div className="col col-md-6 text-izquierda">
            <h4>
              Tipos de documentos
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
              <th>Nombre</th>
              <th>Requerido</th>
              <th>Obligatorio</th>
              <th>Estado</th>
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
  return reducers.doctypesReducer
}

export default connect(mapStateToProps, doctypesActions)(Table);
