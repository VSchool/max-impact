import '../styles/about.css'
import illensDort from '../assets/image10.png'

const About = () => {
    return (
        <div className="about">
            <div className='about-container'>
                <div className='about-text'>
                    <h3>About Illens Dort</h3>
                    <p>About Illens Dort - Your trainer! Illens is a serial entrepreneur. He  published two books: Thinking and Acting With A Compassionate  Heart - The 5 Secret Fears of Failing in Business. He has been training people for over 30 years.</p>
                    <p>Illens Dort is also a certified trainer with:</p>
                    <ul>
                        <li>The Cialdini Institute. Dr. Robert Cialdini is known as the “Godfather of  Influence.” </li>
                        <li>The Maxwell Leadership Certified Team. Dr. John Maxwell is known as the top leadership  expert and communicator in the world.</li>
                        <li>Becoming Your Best Global Leadership. Steve has more than 40 years of experience as a  successful business owner, a trusted senior executive, a professional corporate trainer,  and a respected community leader. </li>
                        <li>Empowered Living – Paul Martinelli has trained more entrepreneurs and business  executives than anyone alive or dead! </li>
                    </ul>
                </div>
                <img className='about-image' alt='Illens Dort' src={illensDort} />
            </div>
        </div>
    )
}

export default About
