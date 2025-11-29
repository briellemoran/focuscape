import React from 'react';
import './Settings.css';
import { useStudy } from './StudyContext';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

function Settings({ isOpen, onClose }: SettingsProps) {
  const { theme, setTheme } = useStudy();

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
            <h3>theme</h3>
            <div className="theme-toggle">
              <button 
                className={`theme-button ${theme === 'light' ? 'active' : ''}`}
                onClick={() => setTheme('light')}
              >
                light mode
              </button>
              <button 
                className={`theme-button ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => setTheme('dark')}
              >
                dark mode
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;