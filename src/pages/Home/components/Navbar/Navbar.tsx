import { Link, useNavigate } from 'react-router-dom';
import ChangeThemeButton from './components/ChangeThemeButton';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();

    const handleCreateAccount = () => {
        navigate('/create-account');
    };

    return (
        <div className="header">
            <div className="navbar-container">
                <Link to="/" className="texts">Home</Link>
                <Link to="/" className="texts">Stream</Link>
                <Link to="/" className="texts">Party</Link>
                <Link to="/" className="texts">Premium</Link>
            </div>
            <div className="tittle-container">
                <h1 className="navbar-tittle">Gamor</h1>
            </div>
            <div className="auth-container">
                <Link to="/login" className="auth-text">Sign in</Link>
                <button 
                    className="login-navbar-button" 
                    onClick={handleCreateAccount}
                >
                    Create account
                </button>
            </div>
            <ChangeThemeButton />
        </div>
    );
}

export default Navbar;