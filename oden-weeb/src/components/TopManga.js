import React from 'react';
import { Top5Manga} from '../datas/MyTopsList';

const TopManga = () => {
    return (
        <div>
            {Top5Manga.map(({ id, rank, anime, cover }) => {
                return (
                    <div key={id} className="sectionManga">
                        <h1> {rank} : {anime}</h1>
                        <img className="topMangaCover" src={cover} alt={anime} />
                    </div>
                )
            })}
        </div>
    );
};

export default TopManga;