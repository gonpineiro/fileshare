import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from './Table'
import Formulario from './Formulario'
import Spinner from '../General/Spinner';
import { Container } from '../styles/styles'

import * as empresasActions from '../../actions/empresasActions'

class Empresas extends Component {

  async componentDidMount() {
    const { traerTodos, empresas } = this.props

    if (!empresas.length) traerTodos()
  }

  ponerContenido = () => {
    const {
      traerTodos, recargar_table, loading, empresas, error,
      history: { goBack }
    } = this.props

    if (recargar_table) traerTodos()

    if (loading && !empresas.length) return <Spinner />

    if (error) return 'Error'

    return <Table goBack={goBack} />
  }

  ponerFormulario = () => <Formulario />

  render() {
    const { state_form } = this.props
    return (
      <Container type={state_form} className="container col-md-10">
        {this.ponerContenido()}
        {this.ponerFormulario()}
      </Container>
    );
  }
}

const mapStateToProps = (reducers) => reducers.empresasReducer

export default connect(mapStateToProps, empresasActions)(Empresas);
