import React from 'react';
import { connect } from 'react-redux'
import './index.css';
import MenuRow from '../General/MenuRow';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

import * as usersActions from '../../actions/usersActions'

const Table = (props) => {
  const { users, goBack } = props

  const addRow = () => users.map((user, key) => (
    <tr key={key}>
      <td>{user.id}</td>
      <td>{
        <MenuRow
          props={props}
          data={user}
        />
      }
      </td>
      <td className="display-none">{user.email}</td>
      <td>{user.type}</td>
    </tr>
  ))

  return (
    <div className="contenido">
      <div className="row-grid">
        <h4 className="title-table">Lista de usuarios</h4>
        <KeyboardReturnIcon fontSize="large" onClick={goBack} className="link" />
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th className="display-none">Email</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {addRow()}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Table);
