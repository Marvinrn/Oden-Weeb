import React from 'react';
import { MangaQuotesList } from '../datas/MangaQuotesList';

const MangaQuotes = () => {
    const randomIndex = Math.floor(Math.random() * MangaQuotesList.length);
    const selectedQuotes = MangaQuotesList[randomIndex];


    return (
        <div className="mangaQuotes">
            <p className="quote">"{selectedQuotes.quote}"</p>
            <p className="author">-{selectedQuotes.name}, {selectedQuotes.manga}.</p>
        </div>
    );
};

export default MangaQuotes;