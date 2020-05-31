import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import Spinner from '../General/Spinner';
import TocIcon from '@material-ui/icons/Toc';

import * as clientesActions from '../../actions/clientesActions'

const Formulario = (props) => {

   const {
      empresasReducer: { empresas },
      usersReducer: { users },
      clientesReducer: {
         cliente: { id, rs, cuil, domicilio, telefono, user_id, empresa_id },
         state_form,
         error_form,
         loading,
      },
      editar,
      cancelar,
      agregar,
      borrar,
      traerTabla,
      cambioClienteRs,
      cambioClienteCuil,
      cambioClienteDomicilio,
      cambioClienteTelefono,
      cambioClienteEmpresaId,
      cambioClienteUserId,
   } = props

   const usersFilter = users.filter(user => user.type === 'cliente');

   const handleCambioClienteRs = (event) => cambioClienteRs(event.target.value);

   const handleCambioClienteCuil = (event) => cambioClienteCuil(event.target.value);

   const handleCambioClienteDomicilio = (event) => cambioClienteDomicilio(event.target.value);

   const handleCambioClienteTelefono = (event) => cambioClienteTelefono(event.target.value);

   const handleCambioClienteEmpresaId = (event) => cambioClienteEmpresaId(event.target.value);

   const handleCambioClienteUserId = (event) => cambioClienteUserId(event.target.value);   

   const guardar = () => {

      const data = {
         id: id,
         rs: rs,
         cuil: cuil,
         domicilio: domicilio,
         telefono: telefono,
         user_id: user_id,
         empresa_id: empresa_id
      };

      if (state_form === 'crear') agregar(data);

      if (state_form === 'editar') editar(data, id)
   };

   const useStyles = makeStyles((theme) => ({
      root: {
         flexGrow: 1,
         width: "100%",
      },

      formControl: {
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
               <div className="col col-md-6 text-derecha" >
                  <TocIcon fontSize="large" className="link" onClick={traerTabla} />
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
                           onChange={handleCambioClienteRs}
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
                           onChange={handleCambioClienteCuil}
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
                           onChange={handleCambioClienteDomicilio}
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
                           onChange={handleCambioClienteTelefono}
                           helperText={error_form.telefono}
                           error={!error_form.telefono ? false : true}
                           disabled={state_form === 'borrar' ? true : false}
                        />

                     </Grid>

                     {/* EMPRESA */}
                     <Grid item xs={12} sm={12}>
                        <FormControl className={classes.formControl}>
                           <InputLabel id="demo-simple-select-helper-label" error={!error_form.empresa_id ? false : true}>Empresa</InputLabel>
                           <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={empresa_id || ''}
                              onChange={handleCambioClienteEmpresaId}
                              error={!error_form.empresa_id ? false : true}
                              disabled={state_form === 'borrar' ? true : false}
                              className="transparent"
                           >
                              <Link to="/empresas">
                                 <MenuItem value="">
                                    <em
                                       className="link link-string"
                                    >
                                       Agregar
                                       </em>
                                 </MenuItem>
                              </Link>

                              {empresas.map((empresa) => (
                                 <MenuItem key={empresa.id} value={empresa.id}>{empresa.rs}</MenuItem>
                              ))}
                           </Select>
                           <FormHelperText error={!error_form.empresa_id ? false : true}>{error_form.empresa_id}</FormHelperText>
                        </FormControl>
                     </Grid>

                     {/* USUARIO */}
                     <Grid item xs={12} sm={12}>
                        <FormControl className={classes.formControl}>
                           <InputLabel id="demo-simple-select-helper-label" error={!error_form.user_id ? false : true}>Usuario</InputLabel>
                           <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={user_id || ''}
                              onChange={handleCambioClienteUserId}
                              error={!error_form.user_id ? false : true}
                              disabled={state_form === 'borrar' ? true : false}
                              className="transparent"
                           >
                              <Link to="/users">
                                 <MenuItem value="">
                                    <em
                                       className="link link-string"
                                    >
                                       Agregar
                                       </em>
                                 </MenuItem>
                              </Link>

                              {usersFilter.map((user) => (
                                 <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
                              ))}
                           </Select>
                           <FormHelperText error={!error_form.user_id ? false : true}>{error_form.user_id}</FormHelperText>
                        </FormControl>
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

const mapStateToProps = ({ clientesReducer, empresasReducer, usersReducer }) => {
   return { clientesReducer, empresasReducer, usersReducer };
};

export default connect(mapStateToProps, clientesActions)(Formulario);