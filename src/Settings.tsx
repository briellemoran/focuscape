import React from 'react';
import './Settings.css';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

function Settings({ isOpen, onClose }: SettingsProps) {
  return (
    <>
      {/* overlay/backdrop */}
      {isOpen && <div className="settings-overlay" onClick={onClose}></div>}
      
      {/* sidebar */}
      <div className={`settings-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="settings-header">
          <h2>settings</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>
        
        <div className="settings-content">
          <div className="settings-section">
            <h3>Theme</h3>
            <p>Theme preferences coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;