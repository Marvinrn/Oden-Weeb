import React, { useState } from 'react';
import { MangaList} from '../datas/RecommendationList';


const CarouselManga = () => {
    const [current, setCurrent] = useState(0)
    const length = MangaList.length

    // function to reset to the first item when arrive to the last item of the Array
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    // function to reset to the last item when arrive to the first item of the Array
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(MangaList) || MangaList.length <= 0) {
        return null
    }

    return (
        <div className="carouselManga">
            <span className="Arrows" onClick={prevSlide}><i className="fas fa-chevron-left carouselLeftArrow"></i></span>
            <span className="Arrows" onClick={nextSlide}><i className="fas fa-chevron-right carouselRightArrow"></i></span>
            {MangaList.map((slide, index) => {
                return (
                    <div className={index === current ? "slide-active" : "slide"} key={index}>
                        {index === current && (
                            <figure className="carouselFigure">
                                <h1 className="carouselTitle">{slide.title}</h1>
                                <div className="row">
                                    <img className="carouselCover" src={slide.cover} alt={slide.title} />
                                    <figcaption className="carouselCaptions">
                                        <h2 className="carouselNumber">Nombre de volumes : {slide.tomes}</h2>
                                        <p className="carouselDescription"> <strong>Synopsis</strong> : {slide.description}</p>
                                        <p className="carouselOpinion"><strong>Mon avis personnel</strong> : {slide.opinion}</p>
                                    </figcaption>
                                </div>
                            </figure>
                        )}
                    </div>
                )
            })}
        </div>
    );
};

export default CarouselManga;