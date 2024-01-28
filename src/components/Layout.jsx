import React from 'react';
import { Outlet } from 'react-router-dom';
// import styles from './Layout.module.css';

function Layout() {
    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
export default Layout;