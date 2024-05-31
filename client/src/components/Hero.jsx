import '../styles/hero.css'
import Button from './global/Button'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-cta-container">
          <h1 className="hero-cta-title">MAXIMUM IMPACT CONTINUOUS LEARNING</h1>
          <p className="hero-cta-body">
            A continuous learning program designed to help small business
            executives and their employees accelerate their personal and
            professional growth and achieve their desired outcomes.
          </p>
          <Button style="btn-landing">Learn more</Button>
        </div>
        <div className="hero-image-container"></div>
      </div>
    </section>
  )
}

export default Hero
