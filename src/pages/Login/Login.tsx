import '../Login/Login.css';
import { useState, useEffect } from 'react';

function Login() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const desktopImage = "src/assets/images/Component1.jpg";
    const mobileImage = "src/assets/images/Component2.png";

    return (
        <div className="login-container">
            <div className="left-content">
                <div className="header">
                    <h1 className="tittle">welcome <br></br><span className="highlight">back</span> <span role="img" aria-label="wave">🖖🏻</span></h1>
                </div>
                <div className='email-form'>
                    <h3 className='subtitles'>Email</h3>
                    <form>
                        <input
                            type="email"
                            placeholder="example@email.com"
                            className="login-input"
                            required
                        />
                    </form>
                </div>
                <div className='email-form'>
                    <h3 className='subtitles'>Password</h3>
                    <form>
                        <input
                            type="password"
                            placeholder="at least 8 characters"
                            className="login-input"
                            required
                        />
                    </form>
                    <a href="#" className="forgot-password">forgot password?</a>
                </div>
                <button className="button" type="submit">Sign in</button>
            </div>
            <div className="image">
                <h1 className="tittle-2">welcome <span className="highlight">back</span> <span role="img" aria-label="wave">🖖🏻</span></h1>
                <img 
                    src={isDesktop ? desktopImage : mobileImage} 
                    alt="avatar" 
                    className="login-image" 
                />
            </div>
        </div>
    );
}

export default Login;