import React from 'react';
import Kozuki from '../assets/Banner/Kozuki.png'
import Jojo from '../assets/Banner/JoJos.png'
import Chariot from '../assets/Banner/Chariot.png'
import Kira from '../assets/Banner/kira.png'
import Jinbei from '../assets/Banner/jinbei.png'
import Mugen from '../assets/Banner/Mugen.png'
import AllMight from '../assets/Banner/AllMight.png'
import NobYuji from '../assets/Banner/NobYujiFushi.png'
import Jolyne from '../assets/Banner/Jolyne.png'


const Banner = () => {
    const bannerImg = [
        Kozuki,
        Jojo,
        Chariot,
        Kira,
        Jinbei,
        Mugen,
        AllMight,
        NobYuji,
        Jolyne
    ]

    const randomIndex = Math.floor(Math.random() * bannerImg.length);
    const selectedImage = bannerImg[randomIndex];


    return (
        <div>
            <img className="banner" src={selectedImage} alt="bannière" />
        </div>
    );
};

export default Banner;