import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import MyTopsMainMenu from '../components/MyTopsMainMenu';

const MyTops = () => {
    return (
        <div>
            <TopBar/>
            <Banner />
            <MyTopsMainMenu />
            <Footer />
        </div>
    );
};

export default MyTops;