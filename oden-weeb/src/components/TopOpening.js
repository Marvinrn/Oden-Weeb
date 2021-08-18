import React from 'react';
import { Top10Op } from '../datas/MyTopsList'

const TopOpening = () => {
    return (
        <div>
            {Top10Op.map(({ id, rank, anime, youtube }) => {
                return (
                    
                    <div key={id} className="sectionOpening">
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

export default TopOpening;