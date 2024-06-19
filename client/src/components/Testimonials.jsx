import { useState } from 'react';
import '../styles/testimonials.css'
import Testimonial from './Testimonial';

import imageOne from '../assets/image4.png'
import imageTwo from '../assets/image6.png'
import imageThree from '../assets/image8.png'

const Testimonials = () => {
    // testimonial data
    const [data, setData] = useState([
        {
            img: imageThree,
            biography: 'By creating a dedicated environment and forum, Illens enables entrepreneurs, small business executives, and employees to focus on improving their businesses and driving sustainable success',
            name: "Allan Smart",
            title: 'Managing Director and Founder – Monteca Group'
        },
        {
            img: imageTwo,
            biography: 'Illens’s Maximum Impact Council events and retreats are always rich with high-quality content, thought leaders, and opportunities to connect with motivated builders who support helping each other reach new heights.',
            name: 'Earl Foote',
            title: 'CEO & Founder - NexusIT Consulting'
        },
        {
            img: imageOne,
            biography: 'Growth is the only guarantee that tomorrow will be better. Growth thrives in a conducive environment.',
            name: 'Dr. John C. Maxwell',
            title: 'Author and Speaker - Maxwell Leadership'
        }
    ])
    return (
        <div className='testimonials'>
            <h2>What Growth-Mindset Business Leaders Say</h2>
            <div className='testimonials-container'>
                {/* map over each testimonial from data state and render Testimonial for each */}
                {data.map((item, i) => <Testimonial key={i} img={item.img} biography={item.biography} name={item.name} title={item.title}  />)}
            </div>
        </div>
      );
    };
    
export default Testimonials;