import React from 'react';
import './Hero.css';
import Image from 'rc-image';

const Hero = () => {
  return (
    <div>
    {/* <div className='quote-container'>
       <span className="hero-quote">Refuse<br/></span> to be Content<br/>
       -Alfred V. Aho
    </div> */}
    <div className='quote-container'>
        Hi I'm <span className='hero-quote'><br />Eric</span>
    </div>
    <div>
    <Image />
    </div>
    </div>
  )
}

export default Hero