import React, {useEffect, useState} from 'react';
import './Hero.css';
import Image from 'rc-image';
import hero_image from '/Users/pacpl/Desktop/ericdam.net/ericdam.net/src/assets/eric_1.png';

const Hero = () => {

const onLoad = () => {

}
  return (
    <div className="hero-container">
        <span className='hero-intro-text'>
            Hi my name is
        </span>
        <span className="hero-name-text">
            Eric Dam
            </span>
        <div>
        {/* <Image className='hero_image' src={hero_image} alt="image"/> */}
        </div>
    </div>
  )
}

export default Hero;