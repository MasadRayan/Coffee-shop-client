import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <div >
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;