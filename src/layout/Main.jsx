import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../section/Banner';

const Main = () => {

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;