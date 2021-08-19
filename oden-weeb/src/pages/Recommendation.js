import React from 'react';
import Banner from '../components/Banner';
import CarouselsPopup from '../components/CarouselsPopup';
import Footer from '../components/Footer';

import TopBar from '../components/TopBar';

const Recommendation = () => {
    return (
        <div>
            <TopBar />
            <Banner />
            <CarouselsPopup />
            <Footer />
        </div>
    );
};

export default Recommendation;