import React from 'react';
import { connect } from 'react-redux'
import { GridTable, RowGrid, Title } from '../styles/styles'
import { ReturnIcon, Add, Download } from '../General/SvgIcons';

import * as documentosActions from '../../actions/documentosActions'

const Table = (props) => {
  const { documentos, goBack, state_form, traerFormulario, user } = props

  const addRowAdmin = () => documentos.map((documento, key) => (
    <tr key={key}>
      <td>{documento.id}</td>
      <td>{documento.name}</td>
      <td>{documento.cliente.rs}</td>
      <td className="display-none">{documento.cliente.empresa.rs}</td>
      <td>{documento.doctype.name}</td>
      <td className="display-none">{documento.created_at}</td>
      <td >
        <a
          href={`/documento/download/${documento.id}`}
          target="_blank"
        >
          <Download />
        </a>
      </td>
    </tr>
  ))

  const addRowCliente = () => documentos.map((documento, key) => (
    <tr key={key}>
      <td>{documento.id}</td>
      <td>{documento.name}</td>
      <td>{documento.doctype.name}</td>
      <td className="display-none">{documento.created_at}</td>
      <td>
        <a
          href={`/documento/download/${documento.id}`}
          target="_blank"
        >
          <Download />
        </a>
      </td>
    </tr>
  ))

  const adminTable = () => (
    <GridTable >
      <RowGrid >
        <Title>
          Lista de documentos
          <Add traerFormulario={traerFormulario} display={state_form !== 'tabla' ? 'none' : ''} />
        </Title>
        <ReturnIcon goBack={goBack} />
      </RowGrid>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cliente</th>
            <th className="display-none">Empresa</th>
            <th>Tipo</th>
            <th className="display-none">Fecha</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {addRowAdmin()}
        </tbody>
      </table>
    </GridTable>
  )

  const clienteTable = () => (
    <GridTable >
      <RowGrid >
        <Title>Lista de documentos</Title>
        <ReturnIcon goBack={goBack} />
      </RowGrid>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th className="display-none">Fecha</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {addRowCliente()}
        </tbody>
      </table>
    </GridTable>
  )

  if (user.type === 'admin') return adminTable()

  if (user.type === 'cliente') return clienteTable()
 
}

const mapStateToProps = (reducers) => reducers.documentosReducer

export default connect(mapStateToProps, documentosActions)(Table);
