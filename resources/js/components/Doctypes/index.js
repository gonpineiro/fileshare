import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from './Table'
import Formulario from './Formulario'
import Asociacion from './Asociacion'
import Spinner from '../General/Spinner';
import { Container } from '../styles/styles'

import * as doctypesActions from '../../actions/doctypesActions'

import * as clientesActions from '../../actions/clientesActions'

const { traerTodos: doctypesTraerTodos } = doctypesActions;
const { traerTodos: clientesTraerTodos } = clientesActions;

class Doctypes extends Component {

  async componentDidMount() {
    const {
      doctypesReducer: { doctypes },
      clientesReducer: { clientes },
      doctypesTraerTodos,
      clientesTraerTodos,
    } = this.props

    if (!doctypes.length) doctypesTraerTodos()

    if (!clientes.length) clientesTraerTodos()
  }

  ponerContenido = () => {
    const {
      doctypesReducer: { doctypes, recargar_table, loading, error, },
      doctypesTraerTodos,
      history: { goBack }
    } = this.props

    if (recargar_table) doctypesTraerTodos()

    if (loading && !doctypes.length) return <Spinner />

    if (error) return 'Error'

    return <Table goBack={goBack} />
  }

  render() {
    const { doctypesReducer: { state_form } } = this.props
    return (
      <Container type={state_form} className="container col-md-10">
        {this.ponerContenido()}
        {state_form === 'asociar' ? <Asociacion /> : <Formulario />}
      </Container>
    );
  }
}

const mapStateToProps = ({ doctypesReducer, clientesReducer }) => {
  return { doctypesReducer, clientesReducer };
};

const mapDispatchToProps = { doctypesTraerTodos, clientesTraerTodos };

export default connect(mapStateToProps, mapDispatchToProps)(Doctypes);
