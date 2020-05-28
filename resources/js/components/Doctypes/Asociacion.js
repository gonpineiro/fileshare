import React from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Spinner from '../General/Spinner';
import TocIcon from '@material-ui/icons/Toc';

import { isExistInObj, deleteObjectInArray } from '../../js/funciones'

import * as doctypesActions from '../../actions/doctypesActions'

const Asociacion = (props) => {

   const {
      doctypesReducer: {
         doctype: { id },
         clientes: clientesForm,
         loading,
      },
      cancelar,
      asociarClientes,
      traerTabla,
      cambioDoctypeClientes,
      clientesReducer: { clientes },
   } = props

   const handleAsociarClientes = (event, cliente) => {
      event.target.checked ? clientesForm.push(cliente) && cambioDoctypeClientes(clientesForm) : ''
      !event.target.checked ? cambioDoctypeClientes(deleteObjectInArray(cliente, clientesForm)) : ''
   }

   const guardar = () => {
      let array = []
      clientesForm.map((cliente) => {
         array.push(cliente.id)
      })
      asociarClientes(array, id)
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
                  ASOCIAR CLIENTES
               </div>
               <div className="col col-md-6 text-derecha" >
                  <TocIcon fontSize="large" className="link" onClick={traerTabla} />
               </div>
            </div>
         </div>
         {loading ? <Spinner /> :
            <div className="card-body">
               <div className={classes.root}>

                  <Grid container spacing={0}>
                     {clientes ? clientes.map((cliente, key) => (
                        <Grid item xs={12} sm={12} key={key}>
                           {/* OBLIGATORIO */}
                           <FormControlLabel
                              control={
                                 <Checkbox
                                    checked={isExistInObj(cliente, clientesForm)}
                                    onChange={() => handleAsociarClientes(event, cliente)}
                                    name={cliente.rs}
                                    color="default"
                                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                                 />
                              }
                              className="checkbox"
                              label={<span style={{ fontSize: '0.8rem' }}>{cliente.rs}</span>}
                           />
                        </Grid>
                     )) : ''}

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

                     <Grid item xs={6} sm={6}>

                        <Button
                           variant="contained"
                           color="inherit"
                           onClick={cancelar}
                           className={classes.formButton}
                        >
                           Cancelar
                        </Button>
                     </Grid>
                  </Grid>
               </div>
            </div>}
      </div>
   );
}

const mapStateToProps = ({ doctypesReducer, clientesReducer }) => {
   return { doctypesReducer, clientesReducer };
};

export default connect(mapStateToProps, doctypesActions)(Asociacion);