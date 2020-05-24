import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Spinner from '../General/Spinner';

import * as empresasActions from '../../actions/empresasActions'

const Formulario = (props) => {

   const {
      empresa: { id, rs, cuil, domicilio, telefono },
      agregar,
      editar,
      borrar,
      cancelar,
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

   const useStyles = makeStyles((theme) => ({
      root: {
         flexGrow: 1,
         width: "100%",
      },

      formButton: {
         marginTop: 20,
      },
   }));

   const classes = useStyles();

   return (

      <div className="card transparent">
         <div className="card-header">
            <div className="row mt-2">
               <div className="col col-md-6 card-agregar" >
                  {state_form === 'crear' ? 'AGREGAR EMPRESA' : ''}
                  {state_form === 'editar' ? 'MODIFICAR EMPRESA' : ''}
                  {state_form === 'borrar' ? 'ELIMINAR EMPRESA' : ''}
               </div>
            </div>
         </div>
         {loading ? <Spinner /> :
            <div className="card-body">
               <div className={classes.root}>

                  <Grid container spacing={3}>
                     {/* RAZÓN SOCIAL */}
                     <Grid item xs={12}>
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
                     </Grid>

                     {/* CUIL */}
                     <Grid item xs={12} sm={12}>
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
                     </Grid>

                     {/* DOMICILIO */}
                     <Grid item xs={12} sm={12}>
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

                     </Grid>

                     {/* TELÉFONO */}
                     <Grid item xs={12} sm={12}>
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

                     </Grid>

                     {/* BUTTOMS */}
                     <Grid item xs={6} sm={6} >
                        {state_form === 'crear' || state_form === 'editar'
                           ?
                           <Button
                              variant="contained"
                              color="primary"
                              onClick={guardar}
                              className={classes.formButton}
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
                                 className={classes.formButton}
                              >
                                 Borrar
                                       </Button>
                           </div>
                           : ''}
                     </Grid>

                     <Grid item xs={6} sm={6}>
                        {state_form === 'editar' || state_form === 'borrar'
                           ?
                           <Button
                              variant="contained"
                              color="inherit"
                              onClick={cancelar}
                              className={classes.formButton}
                           >
                              Cancelar
                                    </Button> : ''}
                     </Grid>
                     {error_form && <small className="text-danger">Existe un registro vinculado.</small>}
                  </Grid>
               </div>
            </div>}
      </div>
   );
}

const mapStateToProps = (reducers) => {
   return reducers.empresasReducer
}

export default connect(mapStateToProps, empresasActions)(Formulario);
