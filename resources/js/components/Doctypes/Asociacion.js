import React from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Spinner from '../General/Spinner';
import { ListIconTable } from '../General/SvgIcons';
import { FormGrid, RowGrid, Title, FormAsociar, DivButton } from '../styles/styles'

import { isExistInObj, deleteObjectInArray } from '../../js/funciones'

import * as doctypesActions from '../../actions/doctypesActions'

const Asociacion = (props) => {

   const {
      doctypesReducer: {
         doctype: { id },
         clientes: clientesForm,
         state_form,
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

   return (
      <FormGrid type={state_form}>
         <RowGrid formtitle={true}>
            <Title>Asociar</Title>
            <ListIconTable traerTabla={traerTabla} />
         </RowGrid>
         {loading ? <Spinner /> :
            <FormAsociar grid={clientes.length} >
               {clientes ? clientes.map((cliente, key) => (
                  <FormControlLabel className="options" key={key}
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
               )) : ''}

               {/* BUTTOMS */}
               <DivButton className="divbutton" >
                  <Button
                     variant="contained"
                     color="primary"
                     onClick={guardar}
                  >
                     Guardar
                  </Button>

                  <Button
                     variant="contained"
                     color="inherit"
                     onClick={cancelar}
                  >
                     Cancelar
                  </Button>
               </DivButton>
            </FormAsociar>}
      </FormGrid>
   );
}

const mapStateToProps = ({ doctypesReducer, clientesReducer }) => {
   return { doctypesReducer, clientesReducer };
};

export default connect(mapStateToProps, doctypesActions)(Asociacion);