import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from './Table'
import Formulario from './Formulario'
import Spinner from '../General/Spinner';
import { Container } from '../styles/styles'

import * as documentosActions from '../../actions/documentosActions'

import * as empresasActions from '../../actions/empresasActions'
import * as doctypesActions from '../../actions/doctypesActions'

const { traerTodos: documentosTraerTodos } = documentosActions;
const { traerTodos: empresasTraerTodos } = empresasActions;
const { traerTodos: doctypesTraerTodos } = doctypesActions;

class Empresas extends Component {

	async componentDidMount() {
		const {
			documentosReducer: { documentos },
			empresasReducer: { empresas },
			doctypesReducer: { doctypes },
			sesionsReducer: { user },
			documentosTraerTodos,
			empresasTraerTodos,
			doctypesTraerTodos,
		} = this.props

		if (!documentos.length) documentosTraerTodos()

		if (!empresas.length && user.type === 'admin') empresasTraerTodos()

		if (!doctypes.length && user.type === 'admin') doctypesTraerTodos()
	}

	ponerContenido = () => {
		const {
			sesionsReducer: { user },
			documentosReducer: {
				documentos,
				loading,
				recargar_table,
				error,
			},
			documentosTraerTodos,
			history: { goBack }
		} = this.props

		if (recargar_table) documentosTraerTodos()

		if (loading && !documentos.length) return <Spinner />

		if (error) return 'Error'

		return <Table goBack={goBack} user={user} />
	}
	ponerFormulario = () => <Formulario />

	render() {
		const { documentosReducer: { state_form } } = this.props

		return (
			<Container type={state_form} className="container col-md-10">
				{this.ponerContenido()}
				{this.ponerFormulario()}
			</Container>
		);
	}
}

const mapStateToProps = ({ documentosReducer, empresasReducer, doctypesReducer, sesionsReducer }) => {
	return { documentosReducer, empresasReducer, doctypesReducer, sesionsReducer };
};

const mapDispatchToProps = {
	documentosTraerTodos,
	empresasTraerTodos,
	doctypesTraerTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Empresas);
