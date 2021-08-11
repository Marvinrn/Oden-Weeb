import React, { useState } from 'react';
import TopOpening from './TopOpening';

const MyTopsMainMenu = () => {
    const [openingOpen, setOpeningOpen] = useState(false)

    function Popup(props) {
        return (props.trigger) ? (
            <div className="popup open">
                {props.children}
            </div>
        ) : "";
    }





    return (
        <main className="myTopsMainMenu">
            <span className="topMenuTitle"><h1>Retrouvez ici sous forme de Top mes classement totalement subjectif sur la culture manga !</h1></span>
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
                <div className="topsSections">
                    <h1> Top 10 Ending </h1>
                    <span className="customArrow"></span>
                </div>
            </section>

            <section>
                <div className="topsSections">
                    <h1> Top 10 Anime </h1>
                    <span className="customArrow"></span>
                </div>
            </section>

            <section>
                <div className="topsSections">
                    <h1> Top 5 JRPG </h1>
                    <span className="customArrow"></span>
                </div>
            </section>

            <section>
                <div className="topsSections">
                    <h1> Top 5 Pires Personnages </h1>
                    <span className="customArrow"></span>
                </div>
            </section>
        </main>
    );
};

export default MyTopsMainMenu;