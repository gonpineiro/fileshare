import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Spinner from '../General/Spinner';
import TocIcon from '@material-ui/icons/Toc';

import * as doctypesActions from '../../actions/doctypesActions'

const Formulario = (props) => {

   const {
      doctype: { id, name, tipo, obligatorio, estado },
      agregar,
      editar,
      borrar,
      cancelar,
      traerTabla,
      state_form,
      error_form,
      cambioDoctypeName,
      cambioDoctypeTipo,
      cambioDoctypeObligatorio,
      cambioDoctypeEstado,
      loading,
   } = props

   const handleCambioDoctypeName = (event) => cambioDoctypeName(event.target.value);

   const handleCambioDoctypeTipo = (event) => cambioDoctypeTipo(event.target.value);

   const handleCambioDoctypeObligatorio = (event) => cambioDoctypeObligatorio(event.target.checked);

   const handleCambioDoctypeEstado = (event) => cambioDoctypeEstado(event.target.checked);

   const guardar = () => {

      const data = {
         id: id,
         name: name,
         tipo: tipo,
         obligatorio: obligatorio,
         estado: estado
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
                  {state_form === 'crear' ? 'AGREGAR TIPO DOC' : ''}
                  {state_form === 'editar' ? 'MODIFICAR TIPO DOC' : ''}
                  {state_form === 'borrar' ? 'ELIMINAR TIPO DOC' : ''}
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
                     {/* NAME */}
                     <Grid item xs={12}>
                        <TextField
                           id="standard-basic"
                           label="Nombre del documento"
                           type="text"
                           className="form-control transparent"
                           value={name || ''}
                           onChange={handleCambioDoctypeName}
                           helperText={error_form.name}
                           error={!error_form.name ? false : true}
                           disabled={state_form === 'borrar' ? true : false}
                        />
                     </Grid>

                     {/* TIPO */}
                     <Grid item xs={12} sm={12}>
                        <FormControl className={classes.formControl}>
                           <InputLabel id="demo-simple-select-helper-label" error={!error_form.tipo ? false : true}>Requerido</InputLabel>
                           <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={tipo || ''}
                              onChange={handleCambioDoctypeTipo}
                              error={!error_form.tipo ? false : true}
                              disabled={state_form === 'borrar' ? true : false}
                              className="transparent"
                           >
                              <MenuItem value={1}>Mensual</MenuItem>
                              <MenuItem value={2}>Anual</MenuItem>
                           </Select>
                           <FormHelperText error={!error_form.tipo ? false : true}>{error_form.tipo}</FormHelperText>
                        </FormControl>
                     </Grid>

                     <Grid item xs={12} sm={12}>
                        {/* OBLIGATORIO */}
                        <FormControlLabel
                           control={
                              <Checkbox
                                 checked={obligatorio || false}
                                 onChange={handleCambioDoctypeObligatorio}
                                 name="obligatorio"
                                 color="default"
                                 inputProps={{ 'aria-label': 'checkbox with default color' }}
                              />
                           }
                           label="Obligatorio"
                        />
                        {/* ESTADO */}
                        <FormControlLabel
                           control={
                              <Checkbox
                                 checked={estado || false}
                                 onChange={handleCambioDoctypeEstado}
                                 name="estado"
                                 color="default"
                                 inputProps={{ 'aria-label': 'checkbox with default color' }}
                                 disabled={state_form === 'crear' ? true : false}
                              />
                           }
                           label="Estado"
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
   return reducers.doctypesReducer
}

export default connect(mapStateToProps, doctypesActions)(Formulario);
