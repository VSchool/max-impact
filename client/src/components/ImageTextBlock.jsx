import '../styles/imagetextblock.css'
import imageTextBlockImage from '../assets/image12.png'

const ImageTextBlock = () => {
    return (
        <div className='image-text-block'>
            <div className='block-container'>
                <div className='block-image'>
                    <img alt="What You'll Get" src={imageTextBlockImage} />
                </div>
                <div className='block-text'>
                    <h3>What You'll Get</h3>
                    <ul>
                        <li>Weekly virtual training sessions (30 to 45 minutes per session)</li>
                        <li>Daily thoughts or inspiring insights delivered to each participant</li>
                        <li>Self-directed activity with four questions derived from the content of the week</li>
                        <li>Access to weekly recordings of the training</li>
                        <li>Quarterly Lunch & Learn sessions or yearly seminars/retreats</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ImageTextBlock
