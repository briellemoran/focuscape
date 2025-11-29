import React from 'react';
import './Customize.css';
import { useStudy } from './StudyContext';
import { useNavigate } from 'react-router-dom';

function Customize() {
  
  const { selectedMethod, selectedBackground, setSelectedMethod, setSelectedBackground, customWorkTime, customBreakTime, setCustomWorkTime, setCustomBreakTime } = useStudy();
  const navigate = useNavigate();

  const handleStartSession = () => {
    if (selectedMethod && selectedBackground) {
      //validate custom times if custom is selected
      if (selectedMethod === 'custom' && (!customWorkTime || !customBreakTime || customWorkTime <= 0 || customBreakTime <= 0)) {
        alert('Please enter valid work and break times');
        return;
      }
      navigate('/timer');
    } else {
      alert('Please select a method and background');
    }
  };
  
  return (
    <div className="customize-page">
      <h2>customize your study session</h2>
      <p>choose your method</p>
        <div className="method-options">
          <button 
            className={`method-button ${selectedMethod === 'pomodoro' ? 'selected' : ''}`}
            onClick={() => setSelectedMethod('pomodoro')}
          >
            pomodoro
          </button>
          <button 
            className={`method-button ${selectedMethod === '52-17' ? 'selected' : ''}`}
            onClick={() => setSelectedMethod('52-17')}
          >
            52-17
          </button>
          <button 
            className={`method-button ${selectedMethod === '90-minute' ? 'selected' : ''}`}
            onClick={() => setSelectedMethod('90-minute')}
          >
            90-minute
          </button>
          <button 
            className={`method-button ${selectedMethod === 'custom' ? 'selected' : ''}`}
            onClick={() => setSelectedMethod('custom')}
          >
            custom
          </button>
        </div>

        {/* method details section - always visible */}
        <div className="method-details">
          {selectedMethod === 'pomodoro' && (
            <p className="method-info">25 min study | 5 min break</p>
          )}
          {selectedMethod === '52-17' && (
            <p className="method-info">52 min study | 17 min break</p>
          )}
          {selectedMethod === '90-minute' && (
            <p className="method-info">90 min study | 20 min break</p>
          )}
          {selectedMethod === 'custom' && (
            <div className="custom-timer-inputs">
              <div className="input-group">
                <label>study time (minutes)</label>
                <input 
                  type="number" 
                  min="1"
                  value={customWorkTime || ''}
                  onChange={(e) => setCustomWorkTime(parseInt(e.target.value))}
                  placeholder="25"
                />
              </div>
              <div className="input-group">
                <label>break time (minutes)</label>
                <input 
                  type="number" 
                  min="1"
                  value={customBreakTime || ''}
                  onChange={(e) => setCustomBreakTime(parseInt(e.target.value))}
                  placeholder="5"
                />
              </div>
            </div>
          )}
        </div>

      <p>choose your background</p>
        <div className="background-options">
          <button 
            className={`background-button ${selectedBackground === 'focus' ? 'selected' : ''}`}
            onClick={() => setSelectedBackground('focus')}
          >
            focus
          </button>
          <button 
            className={`background-button ${selectedBackground === 'energize' ? 'selected' : ''}`}
            onClick={() => setSelectedBackground('energize')}
          >
            energize
          </button>
          <button 
            className={`background-button ${selectedBackground === 'calm' ? 'selected' : ''}`}
            onClick={() => setSelectedBackground('calm')}
          >
            calm
          </button>
          <button 
            className={`background-button ${selectedBackground === 'random' ? 'selected' : ''}`}
            onClick={() => setSelectedBackground('random')}
          >
            random
          </button>
          <button 
            className={`background-button ${selectedBackground === 'classic' ? 'selected' : ''}`}
            onClick={() => setSelectedBackground('classic')}
          >
            classic
          </button>
        </div>

      <button className="start-session" onClick={handleStartSession}>
        start session
      </button>

    </div>
  );
}

export default Customize;