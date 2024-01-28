import React from 'react';
import Header from './Header'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
// import styles from './Layout.module.css';

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
export default Layout;