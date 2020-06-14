import React from 'react';
import { connect } from 'react-redux'
import { GridTable, RowGrid, Title } from './styles';
import MenuRow from '../General/MenuRow';
import { ReturnIcon } from '../General/ReturnIcon';

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
    <GridTable>
      <RowGrid>
        <Title>Lista de usuarios</Title>
        <ReturnIcon goBack={goBack} />
      </RowGrid>
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
    </GridTable>
  );
}

const mapStateToProps = (reducers) => reducers.usersReducer

export default connect(mapStateToProps, usersActions)(Table);
