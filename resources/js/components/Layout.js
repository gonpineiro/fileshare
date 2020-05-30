import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Navbar.css'

function Layout(props) {
    const { type } = props

    const adminNavbar = () => (
        <div className="Navbar">
            <div className="container-fluid">
                <Link className="Navbar__brand-margin link" to="/">
                    <span className="font-weight-light">DOC SHARE</span>
                </Link>
                <Link className="Navbar__brand" to="/users">
                    <span className="font-weight-light">USUARIOS</span>
                </Link>
                <Link className="Navbar__brand" to="/empresas">
                    <span className="font-weight-light">EMPRESAS</span>
                </Link>
                <Link className="Navbar__brand" to="/clientes">
                    <span className="font-weight-light">CLIENTES</span>
                </Link>
                <Link className="Navbar__brand" to="/doctypes">
                    <span className="font-weight-light">TIPO DE DOCUMENTOS</span>
                </Link>
                <Link className="Navbar__brand" to="/documentos">
                    <span className="font-weight-light">DOCUMENTOS</span>
                </Link>
            </div>
        </div>
    )

    const clienteNavbar = () => (
        <div className="Navbar">
            <div className="container-fluid">
                <Link className="Navbar__brand-margin link" to="/">
                    <span className="font-weight-light">DOC SHARE</span>
                </Link>
            </div>
        </div>
    )

    if (type === 'admin') return adminNavbar()

    if (type === 'cliente') return clienteNavbar()    
}

export default Layout;
/*
if (document.getElementById('main')) {
    ReactDOM.render(<Layout />, document.getElementById('main'));
}*/
