import React from 'react';
import Kozuki from '../assets/Banner/Kozuki.png'
import Jojo from '../assets/Banner/JoJos.png'
import Chariot from '../assets/Banner/Chariot.png'
import Kira from '../assets/Banner/kira.png'

const Banner = () => {
        const bannerImg = [Kozuki, Jojo, Chariot, Kira]
        const randomIndex = Math.floor(Math.random() * bannerImg.length);
        const selectedImage = bannerImg[randomIndex];


    return (
        <div>
            <img className="banner" src={selectedImage} alt="bannière"/>
        </div>
    );
};

export default Banner;