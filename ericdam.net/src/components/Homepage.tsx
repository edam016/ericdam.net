import React from 'react'
import Navbar from './Navbar.tsx';
import Hero from './Hero.tsx';
import Aboutme from './Aboutme.tsx';

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Hero/>
        <Aboutme />

    </div>
  )
}

export default Homepage;