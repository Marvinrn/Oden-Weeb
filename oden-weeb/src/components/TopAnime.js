import React from 'react';
import { Top10Anime } from '../datas/MyTopsList';

const TopAnime = () => {
    return (
        <div>
            {Top10Anime.map(({ id, rank, anime, cover }) => {
                return (
                    <div key={id} className="sectionAnime">
                        <h1> {rank} : {anime}</h1>
                        <img className="topAnimeCover" src={cover} alt={anime} />
                    </div>
                )
            })}
        </div>
    );
};

export default TopAnime;