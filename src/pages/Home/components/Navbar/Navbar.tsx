import './Navbar.css'

function Navbar(){
    return(
        <div className="header">
            <div className="navbar-container">
                <a href="#" className="texts">Home</a>
                <a href="#" className="texts">Stream</a>
                <a href="#" className="texts">Party</a>
                <a href="#" className="texts">Premium</a>
            </div>
            <div className="tittle-container">
                <h1 className="tittle">Gamor</h1>
            </div>
            <div className="auth-container">
                <h3 className="auth-text">Sign in</h3>
                <button className="button">Create account</button>
            </div>
        </div>
    );
}

export default Navbar;