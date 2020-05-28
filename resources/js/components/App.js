import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './Layout';
import Users from './Users'
import Empresas from './Empresas';
import Clientes from './Clientes';
import Doctypes from './Doctypes';
import Documentos from './Documentos';

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Route exact path="/users" component={Users} />
      <Route exact path="/empresas" component={Empresas} />
      <Route exact path="/clientes" component={Clientes} />
      <Route exact path="/doctypes" component={Doctypes} />
      <Route exact path="/documentos" component={Documentos} />
    </BrowserRouter>
  );
}

export default App;