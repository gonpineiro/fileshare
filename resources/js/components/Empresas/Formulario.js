import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Spinner from '../General/Spinner';
import { ListIconTable } from '../General/SvgIcons';
import { FormGrid, RowGrid, Title, Form, DivButton } from '../styles/styles'

import * as empresasActions from '../../actions/empresasActions'

const Formulario = (props) => {

   const {
      empresa: { id, rs, cuil, domicilio, telefono },
      agregar,
      editar,
      borrar,
      cancelar,
      traerTabla,
      state_form,
      error_form,
      cambioEmpresaRs,
      cambioEmpresaCuil,
      cambioEmpresaDomicilio,
      cambioEmpresaTelefono,
      loading,
   } = props

   const handleCambioEmpresaRs = (event) => cambioEmpresaRs(event.target.value);

   const handleCambioEmpresaCuil = (event) => cambioEmpresaCuil(event.target.value);

   const handleCambioEmpresaDomicilio = (event) => cambioEmpresaDomicilio(event.target.value);

   const handleCambioEmpresaTelefono = (event) => cambioEmpresaTelefono(event.target.value);

   const handleTitle = (state_form) => {
      if (state_form === 'crear') return <Title>Agrega</Title>
      if (state_form === 'editar') return <Title>Modificar</Title>
      if (state_form === 'borrar') return <Title>Borrar</Title>
   }

   const guardar = () => {

      const data = {
         id: id,
         rs: rs,
         cuil: cuil,
         domicilio: domicilio,
         telefono: telefono
      };

      if (state_form === 'crear') agregar(data);

      if (state_form === 'editar') editar(data, id)
   };

   return (

      <FormGrid type={state_form}>
         <RowGrid formtitle={true}>
            {handleTitle(state_form)}
            <ListIconTable traerTabla={traerTabla} />
         </RowGrid>
         {loading ? <Spinner /> :
            <Form >
               {/* RAZÓN SOCIAL */}
               <TextField
                  id="standard-basic"
                  label="Razón Social"
                  type="text"
                  className="form-control transparent"
                  value={rs || ''}
                  onChange={handleCambioEmpresaRs}
                  helperText={error_form.rs}
                  error={!error_form.rs ? false : true}
                  disabled={state_form === 'borrar' ? true : false}
               />

               {/* CUIL */}
               <TextField
                  label="CUIL/CUIT"
                  type="number"
                  className="form-control transparent"
                  value={cuil || ''}
                  onChange={handleCambioEmpresaCuil}
                  helperText={error_form.cuil}
                  error={!error_form.cuil ? false : true}
                  disabled={state_form === 'borrar' ? true : false}
               />

               {/* DOMICILIO */}
               <TextField
                  id="standard-basic"
                  label="Domicilio"
                  type="text"
                  className="form-control transparent"
                  value={domicilio || ''}
                  onChange={handleCambioEmpresaDomicilio}
                  helperText={error_form.domicilio}
                  error={!error_form.domicilio ? false : true}
                  disabled={state_form === 'borrar' ? true : false}
               />

               {/* TELÉFONO */}
               <TextField
                  id="standard-basic"
                  label="Teléfono"
                  type="text"
                  className="form-control transparent"
                  value={telefono || ''}
                  onChange={handleCambioEmpresaTelefono}
                  helperText={error_form.telefono}
                  error={!error_form.telefono ? false : true}
                  disabled={state_form === 'borrar' ? true : false}
               />

               {/* BUTTOMS */}
               <DivButton >
                  {state_form === 'crear' || state_form === 'editar'
                     ?
                     <Button
                        variant="contained"
                        color="primary"
                        onClick={guardar}
                     >
                        Guardar
                                    </Button> : ''}
                  {state_form === 'borrar'
                     ?
                     <div>
                        <Button
                           variant="contained"
                           color="primary"
                           onClick={() => borrar(id)}
                        >
                           Borrar
                                       </Button>
                     </div>
                     : ''}

                  {state_form === 'editar' || state_form === 'borrar'
                     ?
                     <Button
                        variant="contained"
                        color="inherit"
                        onClick={cancelar}
                     >
                        Cancelar
                                    </Button> : ''}
               </DivButton>
               {error_form && <small className="text-danger">Existe un registro vinculado.</small>}

            </Form >}
      </FormGrid >
   );
}

const mapStateToProps = (reducers) => reducers.empresasReducer

export default connect(mapStateToProps, empresasActions)(Formulario);
