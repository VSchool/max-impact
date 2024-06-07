import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="signup-screen">
            <div className="signup-container">
                <div className="navigation-icons">
                    <button className="icon-button">
                        <img src="/src/assets/icons/back.svg" alt="Back" />
                    </button>
                    <button className="icon-button">
                        <img src="/src/assets/icons/close.svg" alt="Close" />
                    </button>
                </div>
                <div className="third-party-signup">
                    <div className="third-party-signup-container">
                        <h2>Create an Account</h2>
                        <button className="social-signup-button">
                            <img src="/src/assets/icons/google.svg" alt="Google" />
                            Continue with Google
                        </button>
                        <button className="social-signup-button">
                            <img src="/src/assets/icons/facebook.svg" alt="Facebook" />
                            Continue with Facebook
                        </button>
                        <button className="social-signup-button">
                            <img src="/src/assets/icons/apple.svg" alt="Apple" />
                            Continue with Apple
                        </button>
                    </div>
                </div>
                <div className="signup-info">
                    <div className="form-field">
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div className="form-field">
                        <input type="text" placeholder="Last Name"/>
                    </div>
                    <div className="form-field">
                        <input type="text" placeholder="Email or username"/>
                    </div>
                    <div className="form-field">
                        <input type="password" placeholder="Password"/>
                    </div>
                    <button className="signup-button">Sign Up</button>
                    <a href="" className="forgot-password">Forgot your password?</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
