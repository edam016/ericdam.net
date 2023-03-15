import React, {useEffect, useState} from 'react';
import './Hero.css';
import Image from 'rc-image';
import hero_image from '/Users/pacpl/Desktop/ericdam.net/ericdam.net/src/assets/eric_1.png';

const Hero = () => {

const onLoad = () => {

}
  return (
    <div className="hero-container">
        <div className='hero-intro-text'>
            Hi my name is
        </div>
        <div className="hero-name-text">
            <b>Eric Dam.</b>
            </div>
            <div className ="hero-blurb-text">
          I'm a self-improver, learner, <br /> but most importantly a <span style={{ color: '#e3fb3c'}}>do-er</span>
          </div>
        <div>
        {/* <Image className='hero_image' src={hero_image} alt="image"/> */}
        </div>
    </div>
  )
}

export default Hero;