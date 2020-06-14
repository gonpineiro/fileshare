import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Navbar.css'

function Layout(props) {
    const { type, logout, csrf_token } = props

    const adminNavbar = () => (
        <div className="navbar">
            <Link className="logo item" to="/">
                <span className="font-weight-light">DOCSHARE</span>
            </Link>
            <Link className="item" to="/users">
                <span className="font-weight-light">USUARIOS</span>
            </Link>
            <Link className="item" to="/empresas">
                <span className="font-weight-light">EMPRESAS</span>
            </Link>
            <Link className="item" to="/clientes">
                <span className="font-weight-light">CLIENTES</span>
            </Link>
            <Link className="item" to="/doctypes">
                <span className="font-weight-light">TIPO DE DOCUMENTOS</span>
            </Link>
            <Link className="item" to="/documentos">
                <span className="font-weight-light">DOCUMENTOS</span>
            </Link>
            <a
                className="item"
                href="/login"
                onClick={() => logout(csrf_token.content)}
            >
                <span className="font-weight-light">LOG</span>
            </a>
        </div>
    )

    const clienteNavbar = () => (
        <div className="navbar">
            <Link className="logo item" to="/">
                <span className="font-weight-light">DOC SHARE</span>
            </Link>
            <a
                className="item"
                href="/login"
                onClick={() => logout(csrf_token.content)}
            >
                <span className="font-weight-light">LOG</span>
            </a>
        </div>
    )

    if (type === 'admin') return adminNavbar()

    if (type === 'cliente') return clienteNavbar()
}

export default Layout;
