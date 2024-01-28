import React from 'react';
import Header from './Header'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
// import styles from './Layout.module.css';

function Layout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
export default Layout;