import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from './Table'
import Formulario from './Formulario'
import Asociacion from './Asociacion'
import Spinner from '../General/Spinner';

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

	ponerFormulario = () => <Formulario />

	ponerAsociacion = () => <Asociacion />

	render() {
		const { doctypesReducer: { state_form } } = this.props
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

				{state_form === 'crear' || state_form === 'editar' || state_form === 'borrar' ?

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

				{state_form === 'asociar' ?

					<div className="container col-md-9">
						<div className="row mt-2">
							<div className="col col-md-8">
								{this.ponerContenido()}
							</div>
							<div className="col col-md-4">
								{this.ponerAsociacion()}
							</div>
						</div>
					</div> : ''}
			</>
		);
	}
}

const mapStateToProps = ({ doctypesReducer, clientesReducer }) => {
	return { doctypesReducer, clientesReducer };
};

const mapDispatchToProps = {
	doctypesTraerTodos,
	clientesTraerTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctypes);