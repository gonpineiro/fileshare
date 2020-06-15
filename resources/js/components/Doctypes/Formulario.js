import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import Spinner from '../General/Spinner';
import { ListIconTable } from '../General/SvgIcons';
import { FormGrid, RowGrid, Title, Form, DivButton, DivOptions } from '../styles/styles'

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

  const handleTitle = (state_form) => {
    if (state_form === 'crear') return <Title>Agregar</Title>
    if (state_form === 'editar') return <Title>Modificar</Title>
    if (state_form === 'borrar') return <Title>Borrar</Title>
  }

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

  return (
    <FormGrid type={state_form}>
      <RowGrid formtitle={true}>
        {handleTitle(state_form)}
        <ListIconTable traerTabla={traerTabla} />
      </RowGrid>
      {loading ? <Spinner /> :
        <Form grid={4}>
          {/* NAME */}
          <TextField
            id="standard-basic"
            label="Nombre"
            type="text"
            className="form-control transparent"
            value={name || ''}
            onChange={handleCambioDoctypeName}
            helperText={error_form.name}
            error={!error_form.name ? false : true}
            disabled={state_form === 'borrar' ? true : false}
          />

          {/* TIPO */}
          <FormControl>
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

          {/* OBLIGATORIO */}
          <DivOptions >
            <FormControlLabel className="options"
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
            <FormControlLabel className="options"
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
          </DivOptions>

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
              <Button
                variant="contained"
                color="primary"
                onClick={() => borrar(id)}
              >
                Borrar
              </Button> : ''}
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
        </Form>}
    </FormGrid>
  );
}

const mapStateToProps = (reducers) => reducers.doctypesReducer

export default connect(mapStateToProps, doctypesActions)(Formulario);
