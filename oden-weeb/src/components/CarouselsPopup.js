import React, { useEffect, useRef, useState } from 'react';
import CarouselAnime from './CarouselAnime';
import CarouselManga from './CarouselManga'

const CarouselsPopup = () => {
    const [carouselAnimePopup, setCarouselAnimePopup] = useState(false)
    const [carouselMangaPopup, setCarouselMangaPopup] = useState(false)
    let popupRef = useRef();

    //Function to trigger the popup
    function Popup(props) {
        return (props.trigger) ? (
            <div className="popup open">
                {props.children}
            </div>
        ) : "";
    }

    //Event when click outside it close the popup
    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if (!popupRef.current.contains(event.target)) {
                setCarouselAnimePopup(false)
                setCarouselMangaPopup(false)
            }
        })
    })

    return (
        <div className="carouselsPopup">
            <main>
                <h1>Anime que tu dois absolument voir !</h1>
                <button onClick={() => setCarouselAnimePopup(true)}>Anime</button>
                <button onClick={() => setCarouselMangaPopup(true)}>Manga</button>
            </main>

            <div ref={popupRef}>
            <Popup trigger={carouselAnimePopup} setTrigger={setCarouselAnimePopup}>
                <CarouselAnime />
            </Popup>

            <Popup trigger={carouselMangaPopup} setTrigger={setCarouselMangaPopup}>
                <CarouselManga />
            </Popup>
            </div>
        </div>
    );
};

export default CarouselsPopup;