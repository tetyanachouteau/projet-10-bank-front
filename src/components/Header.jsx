import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './Header.module.css';

function Layout() {
    return (
        <nav class="main-nav">
            <a class="main-nav-logo" href="./index.html">
                <img
                class="main-nav-logo-image"
                src="./img/argentBankLogo.png"
                alt="Argent Bank Logo"
                />
                <h1 class="sr-only">Argent Bank</h1>
            </a>
            <div>
                <Link to={"/signin"} class="main-nav-item">
                <i class="fa fa-user-circle"></i>
                Sign In
                </Link>
            </div>
        </nav>
    );
}
export default Layout;