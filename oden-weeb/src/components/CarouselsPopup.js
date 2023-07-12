import React, { useEffect, useRef, useState } from 'react';
import CarouselAnime from './CarouselAnime';
import CarouselManga from './CarouselManga';
import CarouselFilm from './CarouselFilm';
import CarouselJeux from './CarouselJeux';

const CarouselsPopup = () => {
    const [carouselAnimePopup, setCarouselAnimePopup] = useState(false)
    const [carouselMangaPopup, setCarouselMangaPopup] = useState(false)
    const [carouselFilmPopup, setCarouselFilmPopup] = useState(false)
    const [carouselJeuxPopup, setCarouselJeuxPopup] = useState(false)
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
        let handler = (event) => {
            if (!popupRef.current.contains(event.target)) {
                setCarouselAnimePopup(false)
                setCarouselMangaPopup(false)
                setCarouselFilmPopup(false)
                setCarouselJeuxPopup(false)
            }
        }

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })

    return (
        <div className="carouselsPopup">
            <main className="mainRecommendation">
                <h1>Retrouvez ici mes selections d'animes et de mangas incontournables !</h1>
                <div className="recommendationCards">
                    <figure className="recommendationFigure" onClick={() => setCarouselAnimePopup(true)}>
                        <img className="recommendationImg" src="https://w0.peakpx.com/wallpaper/33/7/HD-wallpaper-anime-crossover.jpg" alt="topAnime" />
                        <figcaption className="recoCaption">
                            <h3>Animes à ne pas rater</h3>
                        </figcaption>
                    </figure>

                    <figure className="recommendationFigure" onClick={() => setCarouselMangaPopup(true)}>
                        <img className="recommendationImg" src="https://i.pinimg.com/564x/f5/ff/1f/f5ff1f04a9c3838ed8df70ac83f38b2c.jpg" alt="topAnime" />
                        <figcaption className="recoCaption">
                            <h3>Mangas à ne pas rater</h3>
                        </figcaption>
                    </figure>

                    <figure className="recommendationFigure" onClick={() => setCarouselFilmPopup(true)}>
                        <img className="recommendationImg" src="https://fr.web.img2.acsta.net/medias/nmedia/18/63/07/11/19462959.jpg" alt="topFilm" />
                        <figcaption className="recoCaption">
                            <h3>Films d'animation à ne pas rater</h3>
                        </figcaption>
                    </figure>

                    <figure className="recommendationFigure" onClick={() => setCarouselJeuxPopup(true)}>
                        <img className="recommendationImg" src="https://www.actugaming.net/wp-content/uploads/2019/09/dragon-quest-xi-s-cover.jpg" alt="topJeux" />
                        <figcaption className="recoCaption">
                            <h3>Jeux vidéos à ne pas rater</h3>
                        </figcaption>
                    </figure>
                </div>
            </main>

            <div ref={popupRef}>
                <Popup trigger={carouselAnimePopup} setTrigger={setCarouselAnimePopup}>
                    <CarouselAnime />
                </Popup>

                <Popup trigger={carouselMangaPopup} setTrigger={setCarouselMangaPopup}>
                    <CarouselManga />
                </Popup>

                <Popup trigger={carouselFilmPopup} setTrigger={setCarouselFilmPopup}>
                    <CarouselFilm />
                </Popup>

                <Popup trigger={carouselJeuxPopup} setTrigger={setCarouselJeuxPopup}>
                    <CarouselJeux />
                </Popup>
            </div>
        </div>
    );
};

export default CarouselsPopup;