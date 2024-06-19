import './Login.css';

const Registration = () => {
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
                        <h2>Create an Account</h2>
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
                    <div className='form-field'>
                        <label></label>
                        <input type='text' placeholder="Name" />
                    </div>
                    <div className='form-field'>
                        <label></label>
                        <input type='text' placeholder="Last Name" />
                    </div>
                    <div className="form-field">
                        <label></label>
                        <input type="text" placeholder="Email and username"/>
                    </div>
                    <div className="form-field">
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className='form-checkbox'>
                        <input type='checkbox' />
                        <span>Click here to indicate that you have read and agree with the Terms and Conditions</span>
                    </div>
                    <button className="login-button">Signup</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;
