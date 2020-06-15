import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Spinner from '../General/Spinner';
import LinearProgress from '@material-ui/core/LinearProgress';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Typography from '@material-ui/core/Typography';
import { ListIconTable } from '../General/SvgIcons';
import { FormGrid, RowGrid, ListItemFile, Form, DivButton, ListTittle, ListDescription, Title } from '../styles/styles'

import { bytesToMegabytes } from '../../js/funciones'

import * as documentosActions from '../../actions/documentosActions'
import * as doctypesActions from '../../actions/doctypesActions'

const { traerUno: doctypeTraerUno, cancelar: cancelarDoctype } = doctypesActions;
const { cancelar: cancelarDocumento } = documentosActions;

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
      file_loading,
      file_progress,
      state_form,
      error_form,
      loading,
    },
    cancelarDocumento,
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

    if (state_form === 'file') agregar(formData);
  };

  const formulario = () => {
    return (
      <>
        {/* DOCTYPE */}
        <FormControl >
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

        {/* EMPRESA */}
        <FormControl >
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

        {/* CLIENTE */}
        <FormControl >
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

        {/* FILE */}
          <input
            accept="application/pdf"
            style={{ display: 'none' }}
            id="raised-button-file"
            type="file"
            onChange={handleCapture}
            disabled={cliente_id ? false : true}
          />
          <label htmlFor="raised-button-file">
            <Button
              variant="contained"
              component="span"
              disabled={cliente_id ? false : true}
            >
              Archivo
            </Button>
          </label>
      </>
    )
  }

  const fileDetails = () => {
    const date = new Date(file.lastModified).toUTCString()
    return (
      <>
        <ListItemFile>
          <ListItemAvatar className="listItem">
            <Avatar>
              <DescriptionIcon />
            </Avatar>
          </ListItemAvatar>
          <ListTittle className="titleItem">{'Nombre'}</ListTittle>
          <ListDescription className="descriptionItem">{file.name}</ListDescription>
        </ListItemFile>

        <ListItemFile>
          <ListItemAvatar className="listItem">
            <Avatar>
              <ScheduleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListTittle className="titleItem">{'Modificado'}</ListTittle>
          <ListDescription className="descriptionItem">{date}</ListDescription>
        </ListItemFile>

        <ListItemFile>
          <ListItemAvatar className="listItem">
            <Avatar>
              <FitnessCenterIcon />
            </Avatar>
          </ListItemAvatar>
          <ListTittle className="titleItem">{'Tamaño'}</ListTittle>
          <ListDescription className="descriptionItem">{`${bytesToMegabytes(file.size)} Mb`}</ListDescription>
        </ListItemFile>
      </>
    )
  }

  return (
    <FormGrid type={state_form}>
      <RowGrid formtitle={true}>
        <Title>Agregar documento</Title>
        <ListIconTable traerTabla={traerTabla} />
      </RowGrid>
      {loading ? <Spinner /> :
        <Form grid={4}>
          {state_form === 'crear' ? formulario() : ''}
          {state_form === 'file' ? fileDetails() : ''}

          {state_form === 'file' && !file_loading ?
            <DivButton>
              <Button
                variant="contained"
                color="primary"
                onClick={guardar}
                disabled={file.name ? false : true}
              >
                 Guardar
              </Button>
              <Button
                variant="contained"
                onClick={cancelarDocumento}
                disabled={file.name ? false : true}
              >
                Cancelar
              </Button>
            </DivButton>
            : ''}
          {file_loading ?
            <>
              {file_progress === 100 ?
                <Spinner/> :
                <LinearProgress variant="determinate" value={file_progress} />
              }
            </>
            : ''}
        </Form>}
    </FormGrid>
  );
}

const mapStateToProps = ({ documentosReducer, doctypesReducer, empresasReducer }) => {
  return { documentosReducer, doctypesReducer, empresasReducer };
};

const mapDispatchToProps = {
  cancelarDocumento,
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