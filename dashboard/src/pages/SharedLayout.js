import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const SharedLayout = () => {
    return (
        <>
            <section className='layout-section'>
                <Navbar />
                <Sidebar />
                <Outlet />
            </section>
        </>
    );
}

export default SharedLayout