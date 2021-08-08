import React from 'react';
import Banner from '../components/Banner';
import CarouselsPopup from '../components/CarouselsPopup';
/*import CarouselAnime from '../components/CarouselAnime';
import CarouselManga from '../components/CarouselManga';*/

import TopBar from '../components/TopBar';

const Recommendation = () => {
    return (
        <div>
            <TopBar />
            <Banner />
            <CarouselsPopup />
        </div>
    );
};

export default Recommendation;