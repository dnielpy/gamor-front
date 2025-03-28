import './ChangeThemeButton.css'
import darkButton from '../../../../../../assets/images/dark-theme-button.png'
import { useContext } from 'react';
import { ThemeContext } from '../../../../../../App';

function ChangeThemeButton () {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error("ThemeContext must be used within a ThemeProvider");
    }
    
    return(
        <button className='change-theme-button' onClick={themeContext.changeTheme}>
            <img src={darkButton} alt="Change Theme" className="theme-icon" />
        </button>
    );
}

export default ChangeThemeButton;