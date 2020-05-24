import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './Layout';
import Users from './Users'
import Empresas from './Empresas';

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Route exact path="/users" component={Users} />
      <Route exact path="/empresas" component={Empresas} />
    </BrowserRouter>
  );
}

export default App;