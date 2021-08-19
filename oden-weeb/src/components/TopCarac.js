import React from 'react';
import { Top5Carac } from '../datas/MyTopsList';

const TopCarac = () => {
    return (
        <div>
            {Top5Carac.map(({ id, rank, anime, cover }) => {
                return (
                    <div key={id} className="sectionCarac">
                        <h1> {rank} : {anime}</h1>
                        <img className="topCaracCover" src={cover} alt={anime} />
                    </div>
                )
            })}
        </div>
    );
};

export default TopCarac;