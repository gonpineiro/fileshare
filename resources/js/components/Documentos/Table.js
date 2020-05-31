import React from 'react';
import { connect } from 'react-redux'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import AddIcon from '@material-ui/icons/Add';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';

import * as documentosActions from '../../actions/documentosActions'

const Table = (props) => {
  const { documentos, goBack, state_form, traerFormulario, user } = props

  const addRowAdmin = () => documentos.map((documento, key) => (
    <tr key={key}>
      <td>{documento.id}</td>
      <td>{documento.name}</td>
      <td>{documento.cliente.rs}</td>
      <td>{documento.cliente.empresa.rs}</td>
      <td>{documento.doctype.name}</td>
      <td>{documento.created_at}</td>
      <td className="link" >
        <a
          href={`/documento/download/${documento.id}`}
          target="_blank"
        >
          <AssignmentReturnedIcon fontSize="small" className="link" />
        </a>
      </td>
    </tr>
  ))

  const addColumnsAdmin = () => (
    <tr>
      <th>ID</th>
      <th>Nombre</th>
      <th>Cliente</th>
      <th>Empresa</th>
      <th>Tipo</th>
      <th>Fecha</th>
      <th>Download</th>
    </tr>
  )

  const addRowCliente = () => documentos.map((documento, key) => (
    <tr key={key}>
      <td>{documento.id}</td>
      <td>{documento.name}</td>
      <td>{documento.doctype.name}</td>
      <td>{documento.created_at}</td>
      <td className="link" >
        <a
          href={`/documento/download/${documento.id}`}
          target="_blank"
        >
          <AssignmentReturnedIcon fontSize="small" className="link" />
        </a>
      </td>
    </tr>
  ))

  const addColumnsCliente = () => (
    <tr>
      <th>ID</th>
      <th>Nombre</th>
      <th>Tipo</th>
      <th>Fecha</th>
      <th>Download</th>
    </tr>
  )

  return (
    <div className="card transparent">
      <div className="card-margin">
        <div className="row mt-2">
          <div className="col col-md-6 text-izquierda">
            <h4>
              Lista de documentos
              {state_form === 'tabla' && user.type !== 'cliente' ? <AddIcon fontSize="large" className="link" onClick={traerFormulario} /> : ''}
            </h4>
          </div>
          <div className="col col-md-6 text-derecha">
            {user.type !== 'cliente' ? <KeyboardReturnIcon fontSize="large" onClick={goBack} className="link" /> : ''}
          </div>
        </div>
        <table className="table table-hover">
          <thead>
            {user.type === 'admin' ? addColumnsAdmin() : addColumnsCliente()}
          </thead>
          <tbody>
            {user.type === 'admin' ? addRowAdmin() : addRowCliente()}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = (reducers) => {
  return reducers.documentosReducer
}

export default connect(mapStateToProps, documentosActions)(Table);
