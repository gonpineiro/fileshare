import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './Layout';
import Users from './Users'
import Empresas from './Empresas';
import Clientes from './Clientes';
import Doctypes from './Doctypes';
import Documentos from './Documentos';
import Spinner from './General/Spinner'

import * as sesionsActions from '../actions/sesionsActions'

const api_token = document.head.querySelector('meta[name="api-token"]');

function App(props) {
  const { sesionsReducer: { user }, traerUsuario } = props

  if (!user) traerUsuario(api_token.content)

  const adminRouter = () => (
    <BrowserRouter>
      <Layout type={user.type} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/empresas" component={Empresas} />
      <Route exact path="/clientes" component={Clientes} />
      <Route exact path="/doctypes" component={Doctypes} />
      <Route exact path="/documentos" component={Documentos} />
    </BrowserRouter>
  )

  const clienteRouter = () => (
    <BrowserRouter>
      <Layout type={user.type} />
      <Route exact path="/" component={Documentos} />
    </BrowserRouter>
  )

  if (!user) return (<Spinner />)

  if (user.type === 'admin') return (adminRouter())

  if (user.type === 'cliente') return (clienteRouter())
}

const mapStateToProps = ({ sesionsReducer }) => {
  return { sesionsReducer };
};

export default connect(mapStateToProps, sesionsActions)(App);