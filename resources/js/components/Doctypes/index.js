import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from './Table'
import Formulario from './Formulario'
import Spinner from '../General/Spinner';

import * as doctypesActions from '../../actions/doctypesActions'


class Doctypes extends Component {

	async componentDidMount() {
		const { traerTodos, doctypes } = this.props

		if (!doctypes.length) traerTodos()
	}

	ponerContenido = () => {
		const {
			traerTodos, recargar_table, loading, doctypes, error,
			history: { goBack }
		} = this.props

		if (recargar_table) traerTodos()

		if (loading && !doctypes.length) return <Spinner />

		if (error) return 'Error'

		return <Table goBack={goBack} />
	}
	ponerFormulario = () => <Formulario />

	render() {
		const { state_form } = this.props
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
			</>
		);
	}
}

const mapStateToProps = (reducers) => {
	return reducers.doctypesReducer
}

export default connect(mapStateToProps, doctypesActions)(Doctypes);
