import React from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Spinner from '../General/Spinner';
import { Title, FormGrid, RowGrid, Form, DivButton } from '../styles/styles'

import * as usersActions from '../../actions/usersActions'

const Formulario = (props) => {

  const {
    user: { id, name, email, password, type },
    agregar,
    editar,
    borrar,
    cancelar,
    state_form,
    error_form,
    cambioUsuarioName,
    cambioUsuarioEmail,
    cambioUsuarioType,
    cambioUsuarioPassword,
    loading,
  } = props

  const handleCambioUsuarioName = (event) => cambioUsuarioName(event.target.value);

  const handleCambioUsuarioEmail = (event) => cambioUsuarioEmail(event.target.value);

  const handleCambioUsuarioType = (event) => cambioUsuarioType(event.target.value);

  const handleCambioUsuarioPassword = (event) => cambioUsuarioPassword(event.target.value);

  const handleTitle = (state_form) => {
    if (state_form === 'crear') return <Title>Agrega</Title>
    if (state_form === 'editar') return <Title>Modificando</Title>
    if (state_form === 'borrar') return <Title>Borrar</Title>
  }

  const guardar = () => {

    const data = {
      id: id,
      name: name,
      email: email,
      type: type,
      password: password
    };

    if (state_form === 'crear') agregar(data);

    if (state_form === 'editar') editar(data, id)
  };

  return (

    <FormGrid >
      <RowGrid formtitle={true}>
        {handleTitle(state_form)}
      </RowGrid>
      {loading ? <Spinner /> :
        <Form >
          {/* NAME */}
          <TextField
            id="standard-basic"
            label="Nombre"
            type="text"
            className="transparent"
            value={name || ''}
            onChange={handleCambioUsuarioName}
            helperText={error_form.name}
            error={!error_form.name ? false : true}
            disabled={state_form === 'borrar' ? true : false}
          />

          {/* EMAIL */}
          <TextField
            label="Email"
            type="email"
            className="form-control transparent"
            value={email || ''}
            onChange={handleCambioUsuarioEmail}
            helperText={error_form.email}
            error={!error_form.email ? false : true}
            disabled={state_form === 'borrar' ? true : false}
          />

          {/* PASSWORD */}
          <TextField
            id="standard-basic"
            label="Password"
            type="text"
            className="form-control transparent"
            value={password || ''}
            onChange={handleCambioUsuarioPassword}
            helperText={error_form.password}
            error={!error_form.password ? false : true}
            disabled={state_form === 'borrar' ? true : false}
          />

          {/* TYPE */}
          <FormControl >
            <InputLabel id="demo-simple-select-helper-label" error={!error_form.type ? false : true}>Tipo de usuario</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={type || ''}
              onChange={handleCambioUsuarioType}
              error={!error_form.cliente_id ? false : true}
              disabled={state_form === 'borrar' ? true : false}
              className="transparent"
            >

              <MenuItem value={'admin'}>{'Admin'}</MenuItem>
              <MenuItem value={'cliente'}>{'Cliente'}</MenuItem>
            </Select>
            <FormHelperText error={!error_form.type ? false : true}>{error_form.type}</FormHelperText>
          </FormControl>

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
              </Button>
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

        </Form>}
    </FormGrid>
  );
}

const mapStateToProps = (reducers) => reducers.usersReducer

export default connect(mapStateToProps, usersActions)(Formulario);
