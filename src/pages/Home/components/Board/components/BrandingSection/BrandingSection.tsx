import './BrandingSection.css'

function BrandingSection() {
    return (
        <div className="login-container">
            <h1 className='login-tittle'>start <span className="light">streamming</span> games differently</h1>
            <div className="loggin-text">
                <p>gamor now has <span className='loggin-light'>stream party</span> platform</p>
            </div>
            <div className="loggin-auth">
                <button className="login-button">Create account</button>
                <p className="auth-text">Sign in</p>
            </div>
        </div>

    );
}

export default BrandingSection;