import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login-screen">
            <div className="login-container">
                <div className="navigation-icons">
                    <button className="icon-button">
                        <img src="/src/assets/icons/back.svg" alt="Back" />
                    </button>
                    <button className="icon-button">
                        <img src="/src/assets/icons/close.svg" alt="Close" />
                    </button>
                </div>
                <div className="third-party-login">
                    <div className="third-party-login-container">
                        <h2>Login</h2>
                        <button className="social-login-button">
                            <img src="/src/assets/icons/google.svg" alt="Google" />
                            Continue with Google
                        </button>
                        <button className="social-login-button">
                            <img src="/src/assets/icons/facebook.svg" alt="Facebook" />
                            Continue with Facebook
                        </button>
                        <button className="social-login-button">
                            <img src="/src/assets/icons/apple.svg" alt="Apple" />
                            Continue with Apple
                        </button>
                    </div>
                </div>
                <div className="login-info">
                    <div className="form-field">
                        <label></label>
                        <input type="text" placeholder="Email or username"/>
                    </div>
                    <div className="form-field">
                        <input type="password" placeholder="Password"/>
                    </div>
                    <button className="login-button">Login</button>
                    <a href="/forgot-password" className="forgot-password">Forgot your password?</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
