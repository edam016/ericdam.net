import React from 'react'
import Navbar from './Navbar.tsx';
import Hero from './Hero.tsx';
import Aboutme from './Aboutme.tsx';
import Work from './Work.tsx';

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Hero/>
        <Aboutme />
        <Work />
    </div>
  )
}

export default Homepage;