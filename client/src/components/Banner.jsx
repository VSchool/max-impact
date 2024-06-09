import '../styles/banner.css'
import Button from './global/Button'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner'>
                <div className='banner-cta'>
                    <h2>Ready to Embark on Your Growth Journey?</h2>
                    <p>Join now for exclusive access</p>
                </div>
                <div className='banner-btn-container'>
                    <Button style='banner-btn'>Log in Now</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner