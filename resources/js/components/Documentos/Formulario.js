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

import * as documentosActions from '../../actions/documentosActions'
import * as doctypesActions from '../../actions/doctypesActions'

const { traerUno: doctypeTraerUno, cancelar: cancelarDoctype } = doctypesActions;

const {
   agregar,
   traerTabla,
   cambioDocumentoEmpresaId,
   cambioDocumentoDoctypeId,
   cambioDocumentoClienteId,
   cambioDocumentoFile
} = documentosActions;

const Formulario = (props) => {

   const {
      empresasReducer: { empresas },
      doctypesReducer: { doctypes, doctype },
      documentosReducer: {
         documento: { cliente_id, doctype_id, empresa_id },
         file,
         state_form,
         error_form,
         loading,
      },
      traerTabla,
      cancelarDoctype,
      agregar,
      cambioDocumentoEmpresaId,
      cambioDocumentoDoctypeId,
      cambioDocumentoClienteId,
      cambioDocumentoFile,
      doctypeTraerUno
   } = props

   const handleCambioDocumentoDoctypeId = (event) => {
      const doctypeId = event.target.value
      doctypeId ? doctypeTraerUno(doctypeId) : false
      cambioDocumentoDoctypeId(doctypeId)
   };

   const handleCambioDocumentoEmpresaId = (event) => cambioDocumentoEmpresaId(event.target.value)

   const handleCambioDocumentoClienteId = (event) => cambioDocumentoClienteId(event.target.value);

   const clientesFilter = ({ clientes }, id) => clientes.filter((cliente) => cliente.empresa_id == id)

   const handleCapture = ({ target }) => cambioDocumentoFile(target.files[0])

   const guardar = () => {
      const formData = new FormData();
      formData.append('file', file)
      formData.append('cliente_id', cliente_id)
      formData.append('doctype_id', doctype_id)
      
      if (state_form === 'crear') agregar(formData);
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
                  {state_form === 'crear' ? 'AGREGAR DOCUMENTO' : ''}
                  {state_form === 'editar' ? 'MODIFICAR DOCUMENTO' : ''}
                  {state_form === 'borrar' ? 'ELIMINAR DOCUMENTO' : ''}
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

                     {/* DOCTYPE */}
                     <Grid item xs={12} sm={12}>
                        <FormControl className={classes.formControl}>
                           <InputLabel id="demo-simple-select-helper-label" error={!error_form.doctype_id ? false : true}>Tipo de documento</InputLabel>
                           <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={doctype_id || ''}
                              onChange={handleCambioDocumentoDoctypeId}
                              error={!error_form.doctype_id ? false : true}
                              className="transparent"
                           >
                              <Link to="/doctypes">
                                 <MenuItem onClick={cancelarDoctype}>
                                    <em
                                       className="link link-string"
                                    >
                                       Agregar
                                       </em>
                                 </MenuItem>
                              </Link>

                              {doctypes.map((doctype) => (
                                 <MenuItem key={doctype.id} value={doctype.id}>{doctype.name}</MenuItem>
                              ))}
                           </Select>
                           <FormHelperText error={!error_form.doctype_id ? false : true}>{error_form.doctype_id}</FormHelperText>
                        </FormControl>
                     </Grid>

                     {/* EMPRESA */}
                     <Grid item xs={12} sm={12}>
                        <FormControl className={classes.formControl}>
                           <InputLabel id="demo-simple-select-helper-label" error={!error_form.empresa_id ? false : true}>Empresa</InputLabel>
                           <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={empresa_id || ''}
                              onChange={handleCambioDocumentoEmpresaId}
                              error={!error_form.empresa_id ? false : true}
                              disabled={doctype_id ? false : true}
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

                     {/* CLIENTE */}
                     <Grid item xs={12} sm={12}>
                        <FormControl className={classes.formControl}>
                           <InputLabel id="demo-simple-select-helper-label" error={!error_form.cliente_id ? false : true}>Cliente</InputLabel>
                           <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={cliente_id || ''}
                              onChange={handleCambioDocumentoClienteId}
                              error={!error_form.cliente_id ? false : true}
                              disabled={state_form === 'borrar' ? true : false}
                              className="transparent"
                              disabled={doctype_id && empresa_id ? false : true}
                           >
                              <Link to="/clientes">
                                 <MenuItem value="">
                                    <em
                                       className="link link-string"
                                    >
                                       Agregar
                                       </em>
                                 </MenuItem>
                              </Link>

                              {doctype && doctype.clientes ? clientesFilter(doctype, empresa_id).map((cliente) => (
                                 <MenuItem key={cliente.id} value={cliente.id}>{cliente.rs}</MenuItem>
                              )) : ''}
                           </Select>
                           <FormHelperText error={!error_form.cliente_id ? false : true}>{error_form.cliente_id}</FormHelperText>
                        </FormControl>
                     </Grid>

                     {/* FILE */}
                     <Grid item xs={12} sm={12}>
                        <input
                           accept="application/pdf"
                           className={classes.input}
                           style={{ display: 'none' }}
                           id="raised-button-file"
                           type="file"
                           onChange={handleCapture}
                        />
                        <InputLabel htmlFor="raised-button-file">
                           <Button variant="contained" component="span" className={classes.button}>
                              Upload
                           </Button>
                        </InputLabel>
                     </Grid>


                     {/* BUTTOMS */}
                     <Grid item xs={6} sm={6} >
                        <Button
                           variant="contained"
                           color="primary"
                           onClick={guardar}
                           className={classes.formButton}
                        >
                           Guardar
                        </Button>
                     </Grid>
                  </Grid>
               </div>
            </div>}
      </div>
   );
}

const mapStateToProps = ({ documentosReducer, doctypesReducer, empresasReducer }) => {
   return { documentosReducer, doctypesReducer, empresasReducer };
};

const mapDispatchToProps = {
   agregar,
   traerTabla,
   cancelarDoctype,
   cambioDocumentoEmpresaId,
   cambioDocumentoDoctypeId,
   cambioDocumentoClienteId,
   cambioDocumentoFile,
   doctypeTraerUno
};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
