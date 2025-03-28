import './BrandingSection.css'
import line from "../../../../../../assets/images/Capa 1.png"
import { useNavigate, Link } from 'react-router-dom';


function BrandingSection() {
    const navigate = useNavigate();
    const handleCreateAccount = () => {
        navigate('/create-account');
    }
    return (
        <div className="branding-container">
            <h1 className='login-tittle'>start <br></br><span className="light">streaming</span> games differently</h1>
            <div className="branding-text-container">
                <p>gamor now has <span className='login-light'>stream party</span> platform</p>
                <img className='line' src={line}></img>
            </div>
            <div className="login-auth">
                <button className="login-button" onClick={handleCreateAccount}>Create account</button>
                <Link to="/login" className="auth-text">Sign in</Link>
            </div>
        </div>

    );
}
export default BrandingSection;