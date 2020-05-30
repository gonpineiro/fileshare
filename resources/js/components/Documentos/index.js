import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from './Table'
import Formulario from './Formulario'
import Spinner from '../General/Spinner';

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
			documentosTraerTodos,
			empresasTraerTodos,
			doctypesTraerTodos,
		} = this.props

		if (!documentos.length) documentosTraerTodos()

		if (!empresas.length) empresasTraerTodos()

		if (!doctypes.length) doctypesTraerTodos()
	}

	ponerContenido = () => {
		const {
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

		return <Table goBack={goBack} />
	}
	ponerFormulario = () => <Formulario />

	render() {
		const { documentosReducer: { state_form } } = this.props

		return (
			<>
				{state_form === 'tabla' ?
					<div className="container col-md-9">
						<div className="row mt-2 center">
							<div className="col col-md-12">
								{this.ponerContenido()}
							</div>
						</div>
					</div>
					: ''}

				{state_form === 'crear' || state_form === 'editar' || state_form === 'file' ?

					<div className="container col-md-9">
						<div className="row mt-2">
							<div className="col col-md-8">
								{this.ponerContenido()}
							</div>
							<div className="col col-md-4">
								{this.ponerFormulario()}
							</div>
						</div>
					</div> : ''}
			</>
		);
	}
}

const mapStateToProps = ({ documentosReducer, empresasReducer, doctypesReducer }) => {
	return { documentosReducer, empresasReducer, doctypesReducer };
};

const mapDispatchToProps = {
	documentosTraerTodos,
	empresasTraerTodos,
	doctypesTraerTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(Empresas);
