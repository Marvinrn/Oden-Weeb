import React from 'react';
import { Top20Op } from '../datas/MyTopsList'
import ReactPlayer from 'react-player'

const TopOpening = () => {
    return (
        <div>
            {Top20Op.map(({ id, rank, anime, youtube }) => {
                return (
                    
                    <div key={id} className="sectionOpening">
                        <h1> {rank} : {anime}</h1>
                        <ReactPlayer url={youtube} controls={true} className="youtubePlayer"/>
                    </div>
                )
            })}
        </div>
    );
};

export default TopOpening;