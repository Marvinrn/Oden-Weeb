import React, { useState } from 'react';
import TopAnime from './TopAnime';
import TopCarac from './TopCarac';
import TopEnding from './TopEnding';
import TopManga from './TopManga';
import TopOpening from './TopOpening';

const MyTopsMainMenu = () => {
    const [openingOpen, setOpeningOpen] = useState(false)
    const [endingOpen, setEndingOpen] = useState(false)
    const [animeOpen, setAnimeOpen] = useState(false)
    const [mangaOpen, setMangaOpen] = useState(false)
    const [caracOpen, setCaracOpen] = useState(false)

    function Popup(props) {
        return (props.trigger) ? (
            <div className="popup open">
                {props.children}
            </div>
        ) : "";
    }

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="myTopsMainMenu">
            <span className="topMenuTitle"><h1>Retrouvez ici sous forme de Top mes classements totalement subjectif sur la culture manga !</h1></span>
            <section>
                <div onClick={() => setOpeningOpen(!openingOpen)} className="topsSections">
                    <h1> Top 10 Opening </h1>
                    <span className="customArrow"></span>
                </div>
                <Popup trigger={openingOpen}>
                    <TopOpening />
                </Popup>
            </section>

            <section>
                <div className="topsSections" onClick={() => setEndingOpen(!endingOpen)}>
                    <h1> Top 10 Ending </h1>
                    <span className="customArrow"></span>
                </div>
                <Popup trigger={endingOpen}>
                    <TopEnding />
                </Popup>
            </section>

            <section>
                <div className="topsSections" onClick={() => setAnimeOpen(!animeOpen)}>
                    <h1> Top 10 Animes </h1>
                    <span className="customArrow"></span>
                </div>
                <Popup trigger={animeOpen}>
                    <TopAnime />
                </Popup>
            </section>

            <section>
                <div className="topsSections" onClick={() => setMangaOpen(!mangaOpen)}>
                    <h1> Top 5 Mangas </h1>
                    <span className="customArrow"></span>
                </div>
                <Popup trigger={mangaOpen}>
                    <TopManga />
                </Popup>
            </section>

            <section>
                <div className="topsSections" onClick={() => setCaracOpen(!caracOpen)}>
                    <h1> Top 5 Personnages </h1>
                    <span className="customArrow"></span>
                </div>
                <Popup trigger={caracOpen}>
                <TopCarac />
                </Popup>
            </section>

            <i className="fas fa-chevron-up scrollTop" onClick={scrollTop}></i>
        </main>
    );
};

export default MyTopsMainMenu;