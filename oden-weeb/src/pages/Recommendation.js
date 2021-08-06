import React from 'react';
import Banner from '../components/Banner';
import CarouselAnime from '../components/CarouselAnime';
import CarouselManga from '../components/CarouselManga';

import TopBar from '../components/TopBar';

const Recommendation = () => {
    return (
        <div>
            <TopBar />
            <Banner />
            <CarouselAnime />
            <CarouselManga />
        </div>
    );
};

export default Recommendation;