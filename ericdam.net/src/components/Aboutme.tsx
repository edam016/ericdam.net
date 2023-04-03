import React from 'react'
import Bio from './Bio.tsx';
import { Image } from 'antd';
import hero_image from '/Users/pacpl/Desktop/ericdam.net/ericdam.net/src/assets/eric_1.png';

export const Aboutme = () => {
  return (
    <div className="container">
      <Bio />
      <Image src={hero_image} />
    </div>
  )
}

export default Aboutme;