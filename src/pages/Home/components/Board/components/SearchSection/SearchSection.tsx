import './SearchSection.css'
import PlatformButtons from './components/PlatformButtons';
import SearchCard from './components/SearchCard';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../Board';

interface SearchSectionProps{
    addNewStreamer: (id: number) => void;
}

function SearchSection() {
    const dataContext = useContext(DataContext);

    if (!dataContext) {
        return null; 
    }

    return (
        <section className="search-section">
            <div className='platform-section'>
                <h1 className='platform-tittle'>01. <span className='platform-span'>Choose Platform</span></h1>
                <PlatformButtons />
            </div>
            <div className='search-game-section'>
                <h1 className='platform-tittle'>02. <span className='platform-span'>Searching Game</span></h1>
                <SearchCard /> 
            </div>
        </section>
    );
}

export default SearchSection;