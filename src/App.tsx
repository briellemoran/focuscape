import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';
import Home from './Home';
import Customize from './Customize';
import Timer from './Timer';
import Settings from './Settings';
import { StudyProvider } from './StudyContext';

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <StudyProvider>
      <Router>
        <div className="App">
          <Navbar onSettingsClick={() => setIsSettingsOpen(true)} />
          <Settings isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Home />} />
            <Route path="/customize" element={<Customize />} />
            <Route path="/timer" element={<Timer />} />
          </Routes>
        </div>
      </Router>
    </StudyProvider>
  );
}

export default App;