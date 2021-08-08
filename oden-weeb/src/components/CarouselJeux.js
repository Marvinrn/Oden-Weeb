import React, { useState } from 'react';
import { JeuxList } from '../datas/RecommendationList';


const CarouselAnime = () => {
    const [current, setCurrent] = useState(0)
    const length = JeuxList.length

    // function to reset to the first item when arrive to the last item of the Array
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    // function to reset to the last item when arrive to the first item of the Array
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(JeuxList) || JeuxList.length <= 0) {
        return null
    }

    return (
        <div className="carouselJeux">
            <span className="Arrows" onClick={prevSlide}><i className="fas fa-chevron-left carouselLeftArrow"></i></span>
            <span className="Arrows" onClick={nextSlide}><i className="fas fa-chevron-right carouselRightArrow"></i></span>
            {JeuxList.map((slide, index) => {
                return (
                    <div className={index === current ? "slide-active" : "slide"} key={index}>
                        {index === current && (
                            <figure className="carouselFigure">
                                <h1 className="carouselTitle">{slide.title}</h1>
                                <div className="row">
                                    <img className="carouselJeuxCover" src={slide.cover} alt={slide.title} />
                                    <figcaption className="carouselCaptions">
                                        <h2 className="carouselNumber">Genre : {slide.category}</h2>
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

export default CarouselAnime;