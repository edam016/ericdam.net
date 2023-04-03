import React, {useEffect, useState} from 'react';
import './Hero.css';
import Image from 'rc-image';

export const Hero = () => {

  return (
    <div className="hero-container">
        <div className='hero-intro-text'>
            Hi my name is
        </div>
        <div className="hero-name-text">
            <b>Eric Dam.</b>
            </div>
            <div className ="hero-blurb-text">
          I'm a self-improver, learner and many other things, <br /> but most importantly a <span style={{ color: '#FFFF'}}><mark> do-er. </mark></span>
          </div>
        <div>
        </div>
    </div>
  )
}

export default Hero;