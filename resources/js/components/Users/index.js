import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from './Table'
import Formulario from './Formulario'
import Spinner from '../General/Spinner';
import './index.css'

import * as usersActions from '../../actions/usersActions'


class Users extends Component {

  async componentDidMount() {
    const { traerTodos, users } = this.props

    if (!users.length) traerTodos()
  }

  ponerContenido = () => {
    const {
      traerTodos, recargar_table, loading, users, error,
      history: { goBack }
    } = this.props

    if (recargar_table) traerTodos()

    if (loading && !users.length) return <Spinner />

    if (error) return 'Error'

    return <Table goBack={goBack} />
  }
  ponerFormulario = () => <Formulario />

  render() {

    return (
      <div className="container col-md-10">
        {this.ponerContenido()}
        {this.ponerFormulario()}
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(Users);
