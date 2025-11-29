import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IoSettingsOutline, IoBulbOutline } from 'react-icons/io5';

interface NavbarProps {
  onSettingsClick: () => void;
}

function Navbar({ onSettingsClick }: NavbarProps) {
    const SettingsIcon = IoSettingsOutline as React.ComponentType<{ size?: number }>;
    const LightbulbIcon = IoBulbOutline as React.ComponentType<{ size?: number }>;
    
    return (
        <nav className="navbar">
        <div className="navbar-container">
            <Link to="/home" className="navbar-logo-link">
                <h1 className="navbar-logo">focuscape</h1>
            </Link>
            <ul className="navbar-menu">
            <li className="navbar-item">
                <Link to="/" className="navbar-link">
                    <LightbulbIcon size={30} />
                </Link>
            </li>
            <li className="navbar-item">
                <button onClick={onSettingsClick} className="navbar-link navbar-button">
                    <SettingsIcon size={30} />
                </button>
            </li>
            </ul>
        </div>
        </nav>
  );
}

export default Navbar;