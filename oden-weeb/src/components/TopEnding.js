import React from 'react';
import { Top10End } from '../datas/MyTopsList'
import ReactPlayer from 'react-player'

const TopEnding = () => {
    return (
        <div>
            {Top10End.map(({ id, rank, anime, youtube }) => {
                return (
                    <div key={id} className="sectionEnding">
                        <h1> {rank} : {anime}</h1>
                        <ReactPlayer 
                        className="youtubePlayer"
                        url={youtube} 
                        controls={true} 
                        width="100%"
                        height="100%"
                        config={{ youtube: { playerVars: { origin: 'https://www.youtube.com' }}}}
                        />  
                    </div>
                )
            })}
        </div>
    );
};

export default TopEnding;