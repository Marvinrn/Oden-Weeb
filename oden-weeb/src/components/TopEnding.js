import React from 'react';
import { Top10End } from '../datas/MyTopsList'

const TopEnding = () => {
    return (
        <div>
            {Top10End.map(({ id, rank, anime, youtube }) => {
                return (
                    <div key={id} className="sectionEnding">
                        <h1> {rank} : {anime}</h1>
                        <iframe
                            width="100%"
                            height="100%"
                            src={youtube}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                            config={{ youtube: { playerVars: { origin: 'https://www.youtube.com' }}}}
                        />
                    </div>
                )
            })}
        </div>
    );
};

export default TopEnding;