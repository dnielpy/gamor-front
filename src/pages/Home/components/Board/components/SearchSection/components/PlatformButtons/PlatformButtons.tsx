import './PlatformButtons.css';
import { useContext } from 'react';
import { DataContext } from '../../../../Board';

function PlatformButtons() {
    const dataContext = useContext(DataContext);

    if (!dataContext) {
        return null;
    }

    const handleButtonClick = (id: number) => {
        const newCategory = dataContext.category.map((_, index) => index === id);
        dataContext.updateCategory(newCategory);
    };

    return (
        <div className="selector-container">
            <button
                className={`platform-button party-button ${dataContext.category[0] ? 'active' : ''}`}
                onClick={() => handleButtonClick(0)}
            >
                Party
            </button>
            <button
                className={`platform-button match-button ${dataContext.category[1] ? 'active' : ''}`}
                onClick={() => handleButtonClick(1)}
            >
                Matchs
            </button>
            <button
                className={`platform-button streams-button ${dataContext.category[2] ? 'active' : ''}`}
                onClick={() => handleButtonClick(2)}
            >
                Streams
            </button>
        </div>
    );
}

export default PlatformButtons;