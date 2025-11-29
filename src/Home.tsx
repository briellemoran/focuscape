import React from 'react';
import './Home.css';
import Navbar from './Navbar';

function Home() {
  return (
    <div className="home-page">
      <h1>welcome to</h1>
      <h2>focuscape</h2>
      <p>
        Focuscape was created to provide students with a beautiful, 
        distraction-free environment for focused study sessions.
      </p>
      <p>
        Choose from different study techniques and calming backgrounds 
        designed to help you maintain concentration and productivity.
      </p>
    </div>
  );
}

export default Home;