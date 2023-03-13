import React, {useEffect, useState} from 'react';
import './Hero.css';
import Image from 'rc-image';
import hero_image from '/Users/pacpl/Desktop/ericdam.net/ericdam.net/src/assets/eric_1.png';

const Hero = () => {

const onLoad = () => {

}
  return (
    <div className="container">

    <div className='hero-container'>
        <b>Hi I'm <span className='hero-name'>Eric</span></b>
    </div>
    <div>
        <Image className='hero_image' src={hero_image}/>
    </div>
    </div>
  )
}

export default Hero;