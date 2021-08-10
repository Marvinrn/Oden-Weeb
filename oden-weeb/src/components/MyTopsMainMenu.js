import React from 'react';

const TopOpening = () => {
    return (
        <main className="myTopsMainMenu">
            <span className="topMenuTitle"><h1>Retrouvez ici sous forme de Top mes classement totalement subjectif sur la culture manga !</h1></span>
            <div className="topsSections">
                <h1> Top 20 Opening </h1>
                <span className="customArrow"></span>
            </div>

            <div className="topsSections">
                <h1> Top 20 Ending </h1>
                <span className="customArrow"></span>
            </div>

            <div className="topsSections">
                <h1> Top 10 Anime </h1>
                <span className="customArrow"></span>
            </div>

            <div className="topsSections">
                <h1> Top 5 JRPG </h1>
                <span className="customArrow"></span>
            </div>

            <div className="topsSections">
                <h1> Top 5 Pires Personnages </h1>
                <span className="customArrow"></span>
            </div>
        </main>
    );
};

export default TopOpening;