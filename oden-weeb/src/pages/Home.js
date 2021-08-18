import React from 'react';
import TopBar from '../components/TopBar';
import Banner from '../components/Banner';
import MangaQuotes from '../components/MangaQuotes';
import Footer from '../components/Footer';




const Home = () => {
    return (
        <div className="home">
            <TopBar />
            <Banner />
            <MangaQuotes />
            <section>
                <h1>Présentation</h1>
                <br/>
                <p>Bienvenu sur <strong>ODEN WEEB</strong> !</p>
                <br/>
                <p>Fan de Manga et d'Anime en tous genres,  je vous partage à travers ce site ma passion pour l'univers Manga/Anime.
                    <br/>
                    <br/>
                Vous y retrouverez notamment des classements totalement personnel en rapport à la culture Manga/Anime (Top Opening, Top Anime Top Personnages etc. etc.), ainsi que des recommandations personnelles de Manga à lire et d'anime à regarder.
                </p>
                <br/>
                <p className="quote"> "Bouillir, tel est le propre du Oden." -Oden Kozuki</p>
            </section>
            <Footer />
        </div>
    );
};

export default Home;