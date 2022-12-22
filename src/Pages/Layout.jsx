import React from 'react';
import Header from '../Components/Header';
import Main from '../Components/Main';
import Footer from '../Components/Footer';

const Layout = () => {
    return (
        <div className='Content-wrapper'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};

export default Layout;