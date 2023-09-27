import React, {useEffect, useState} from 'react';
import './Hero.css';
import { Reveal } from "./Reveal.tsx";
import Image from 'rc-image';
import IconList from './IconList.tsx';
import hero_image from '/Users/pacpl/Desktop/ericdam.net/ericdam.net/src/assets/eric_1.png';

export const Hero = () => {

  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <Reveal>
        <div className='hero-intro-text'>
            Hi my name is
        </div>
        </Reveal>
        <div className="hero-name-text">
          <Reveal>
            <b>Eric Dam</b>
            </Reveal>
            </div>
            <Reveal width='100%'>
              <div>
            <div className='hero-bio'>
              Aspiring FullStack SWE with 2 YOE
            </div>
            {/* <div className ="hero-blurb-text">
          I'm a self-improver, learner and many other things, <br /> but most importantly a <span style={{ color: '#FFFF'}}><mark> do-er. </mark></span>
          </div> */}
          {/* <span className='underline'>Content coming soon</span> */}
          <div>
          <IconList />
          </div>
          </div>
          </Reveal>
        <div>
        </div>
        </div>
        <Image src={hero_image} height={500}/>  
    </div>
  )
}

export default Hero;