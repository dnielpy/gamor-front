import './SearchBar.css';
import icon from '../../../../../../../../../../assets/images/settings-icon-white.png';
import { useContext } from 'react';
import { DataContext } from '../../../../../../../Board/Board';

function SearchBar() {
    const dataContext = useContext(DataContext);

    if (!dataContext) {
        return null; 
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dataContext.setSearchedText(event.target.value);
        dataContext.updateSearchedStreams(event.target.value);
    };

    return (
        <div className='channel-search-input'>
            <input
                type="text"
                placeholder="Search channels..."
                className="channel-search-input-field"
                onChange={handleInputChange}
            />
            <button className="icon-button">
                <img className="icon" src={icon} alt="Settings Icon" />
            </button>
        </div>
    );
}

export default SearchBar;