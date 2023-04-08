import React from 'react'
import Navbar from './Navbar.tsx';
import Hero from './Hero.tsx';
import Aboutme from './Aboutme.tsx';
import Work from './Work.tsx';
import './Homepage.css';

const Homepage = () => {
  return (
    <div >
        <Navbar />
        <div className="elementToFadeInAndOut">
        <Hero/>
        {/* <Aboutme />
        <Work /> */}
        </div>
    </div>
  )
}

export default Homepage;