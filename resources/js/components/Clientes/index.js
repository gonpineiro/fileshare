import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from './Table'
import Formulario from './Formulario'
import Spinner from '../General/Spinner';
import { Container } from '../styles/styles'

import * as clientesActions from '../../actions/clientesActions'

import * as empresasActions from '../../actions/empresasActions'
import * as usersActions from '../../actions/usersActions'

const { traerTodos: clientesTraerTodos } = clientesActions;
const { traerTodos: empresasTraerTodos } = empresasActions;
const { traerTodos: usersTraerTodos } = usersActions;

class Clientes extends Component {

	async componentDidMount() {
		const {
			clientesReducer: { clientes },
			empresasReducer: { empresas },
			usersReducer: { users },
			clientesTraerTodos,
			empresasTraerTodos,
			usersTraerTodos,
		} = this.props

		if (!clientes.length) clientesTraerTodos()

		if (!empresas.length) empresasTraerTodos()

		if (!users.length) usersTraerTodos()
	}

	ponerContenido = () => {
		const {
			clientesReducer: {
				clientes,
				loading,
				recargar_table,
				error,
			},
			clientesTraerTodos,
			history: { goBack }
		} = this.props

		if (recargar_table) clientesTraerTodos()

		if (loading && !clientes.length) return <Spinner />

		if (error) return 'Error'

		return <Table goBack={goBack} />
	}
	ponerFormulario = () => <Formulario />

	render() {
		const { clientesReducer: { state_form } } = this.props
		return (
			<Container type={state_form} className="container col-md-10">
				{this.ponerContenido()}
				{this.ponerFormulario()}
			</Container>
		);
	}
}

const mapStateToProps = ({ clientesReducer, empresasReducer, usersReducer }) => {
	return { clientesReducer, empresasReducer, usersReducer };
};

const mapDispatchToProps = {
	usersTraerTodos,
	clientesTraerTodos,
	empresasTraerTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(Clientes);
