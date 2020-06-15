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
import { ListIconTable } from '../General/SvgIcons';
import { FormGrid, RowGrid, Title, Form, DivButton } from '../styles/styles'

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

    <FormGrid type={state_form}>
      <RowGrid formtitle={true}>
        {handleTitle(state_form)}
        <ListIconTable traerTabla={traerTabla} />
      </RowGrid>
      {loading ? <Spinner /> :
        <Form grid={7}>
          {/* RAZÓN SOCIAL */}
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

          {/* CUIL */}
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

          {/* DOMICILIO */}
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

          {/* TELÉFONO */}
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

          {/* EMPRESA */}
          <FormControl>
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

          {/* USUARIO */}
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

        </Form >}
    </FormGrid >
  );
}

const mapStateToProps = ({ clientesReducer, empresasReducer, usersReducer }) => {
  return { clientesReducer, empresasReducer, usersReducer };
};

export default connect(mapStateToProps, clientesActions)(Formulario);