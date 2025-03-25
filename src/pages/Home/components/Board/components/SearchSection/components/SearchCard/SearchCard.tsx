import './SearchCard.css';
import ChannelsList from './components/ChannelsList';
import SearchBar from './components/SearchBar';
import StreamCard from '../../../StreamSection/components/StreamCard';
import { useContext } from 'react';
import { DataContext } from '../../../../Board';
import { Stream } from '../../../../services/service';


function SearchCard() {
    const dataContext = useContext(DataContext);

    if (!dataContext) {
        return null; 
    }
    
    return (
        <div className='search-card-container'>
            <SearchBar />
            <div className='space'></div>
            <ChannelsList/>
            <button className='search-button'>
                Search Now
            </button>
        </div>
    );
}

export default SearchCard;