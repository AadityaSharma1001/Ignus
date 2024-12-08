import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar.js';
import Ignus from '../Images/ignus.png';

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className='home-content'>
        <div className='home-ignus-logo'>
          <img src={Ignus} alt='Ignus Logo'/>
        </div>
      </div>
    </div>
  )
}

export default Home
