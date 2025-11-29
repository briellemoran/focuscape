import React, { useState, useEffect } from 'react';
import './Timer.css';
import { useStudy } from './StudyContext';
import CircularChart from './CircularChart';
import { IoPlayOutline, IoPauseOutline, IoRefreshOutline } from 'react-icons/io5';

function Timer() {
  const { selectedMethod, selectedBackground, customWorkTime, customBreakTime } = useStudy();

  const PlayIcon = IoPlayOutline as React.ComponentType<{ size?: number }>;
  const PauseIcon = IoPauseOutline as React.ComponentType<{ size?: number }>;
  const RefreshIcon = IoRefreshOutline as React.ComponentType<{ size?: number }>;
  
  //timer state
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkTime, setIsWorkTime] = useState(true);
  
  //track total time
  const [totalStudyTime, setTotalStudyTime] = useState(0); //in seconds
  const [totalBreakTime, setTotalBreakTime] = useState(0); //in seconds
  const [showSummary, setShowSummary] = useState(false);

  //set initial time based on selected method
  useEffect(() => {
    const getTimerDurations = (method: string) => {
      switch(method) {
          case 'pomodoro':
          return { work: 25, break: 5 };
          case '52-17':
          return { work: 52, break: 17 };
          case '90-minute':
          return { work: 90, break: 20 };
          case 'custom':
          return { work: customWorkTime, break: customBreakTime };
          default:
          return { work: 25, break: 5 };
      }
    };
    
    const durations = getTimerDurations(selectedMethod);
    setMinutes(durations.work);
    setSeconds(0);
  }, [selectedMethod, customWorkTime, customBreakTime]);

  //timer countdown logic
  useEffect(() => {
    const getTimerDurations = (method: string) => {
      switch(method) {
          case 'pomodoro':
          return { work: 25, break: 5 };
          case '52-17':
          return { work: 52, break: 17 };
          case '90-minute':
          return { work: 90, break: 20 };
          case 'custom':
          return { work: customWorkTime, break: customBreakTime };
          default:
          return { work: 25, break: 5 };
      }
    };
    
    let interval: NodeJS.Timeout;
    
    if (isRunning) {
      interval = setInterval(() => {
        //track time spent
        if (isWorkTime) {
          setTotalStudyTime(prev => prev + 1);
        } else {
          setTotalBreakTime(prev => prev + 1);
        }
        
        if (seconds === 0) {
          if (minutes === 0) {
            //timer finished - switch between work and break
            const durations = getTimerDurations(selectedMethod);
            
            if (isWorkTime) {
              //switch to break time
              setIsWorkTime(false);
              setMinutes(durations.break);
              setSeconds(0);
            } else {
              //switch back to work time
              setIsWorkTime(true);
              setMinutes(durations.work);
              setSeconds(0);
            }
            
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds, isWorkTime, selectedMethod, customWorkTime, customBreakTime]);

  const resetTimer = () => {
    setIsRunning(false);
    
    const getTimerDurations = (method: string) => {
      switch(method) {
          case 'pomodoro':
          return { work: 25, break: 5 };
          case '52-17':
          return { work: 52, break: 17 };
          case '90-minute':
          return { work: 90, break: 20 };
          case 'custom':
          return { work: customWorkTime, break: customBreakTime };
          default:
          return { work: 25, break: 5 };
      }
    };
    
    const durations = getTimerDurations(selectedMethod);
    
    if (isWorkTime) {
      setMinutes(durations.work);
    } else {
      setMinutes(durations.break);
    }
    setSeconds(0);
  };

  const skipToBreak = () => {
    setIsRunning(false);
    
    const getTimerDurations = (method: string) => {
      switch(method) {
          case 'pomodoro':
          return { work: 25, break: 5 };
          case '52-17':
          return { work: 52, break: 17 };
          case '90-minute':
          return { work: 90, break: 20 };
          case 'custom':
          return { work: customWorkTime, break: customBreakTime };
          default:
          return { work: 25, break: 5 };
      }
    };
    
    const durations = getTimerDurations(selectedMethod);
    setIsWorkTime(false);
    setMinutes(durations.break);
    setSeconds(0);
  };

  const skipToWork = () => {
    setIsRunning(false);
    
    const getTimerDurations = (method: string) => {
      switch(method) {
          case 'pomodoro':
          return { work: 25, break: 5 };
          case '52-17':
          return { work: 52, break: 17 };
          case '90-minute':
          return { work: 90, break: 20 };
          case 'custom':
          return { work: customWorkTime, break: customBreakTime };
          default:
          return { work: 25, break: 5 };
      }
    };
    
    const durations = getTimerDurations(selectedMethod);
    setIsWorkTime(true);
    setMinutes(durations.work);
    setSeconds(0);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const endSession = () => {
    setIsRunning(false);
    setShowSummary(true);
  };

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  };

  //summary screen
  if (showSummary) {
    return (
        <div className={`timer-page background-${selectedBackground}`}>
        <div className="summary-overlay">
            <div className="summary-popup">
            <h2>great work!</h2>
            <p className="summary-subtitle">you completed your study session</p>
            
            <div className="summary-layout">
                <div className="summary-left">
                <div className="summary-stats">
                    <p className="summary-stat">study time: {formatTime(totalStudyTime)}</p>
                    <p className="summary-stat">break time: {formatTime(totalBreakTime)}</p>
                    <p className="summary-stat">method: {selectedMethod}</p>
                </div>
                
                <button className="new-session-button" onClick={() => window.location.href = '/customize'}>
                    new session
                </button>
                </div>
                
                <div className="summary-right">
                <CircularChart studyTime={totalStudyTime} breakTime={totalBreakTime} />
                </div>
            </div>
            
            <button className="exit-button" onClick={() => window.location.href = '/'}>
                EXIT
            </button>
            </div>
        </div>
        </div>
    );
  }

  return (
    <div className={`timer-page background-${selectedBackground}`}>
      <div className="timer-content">
        <h2>{isWorkTime ? 'focus time' : 'break time'}</h2>
        <div className="timer-display">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        <div className="timer-controls">
            <button className="timer-icon-button" onClick={toggleTimer}>
            {isRunning ? <PauseIcon size={40} /> : <PlayIcon size={40} />}
            </button>
            <button className="timer-icon-button" onClick={resetTimer}>
            <RefreshIcon size={40} />
            </button>
            {isWorkTime ? (
            <button className="timer-button" onClick={skipToBreak}>
                skip to break
            </button>
            ) : (
            <button className="timer-button" onClick={skipToWork}>
                skip to work
            </button>
            )}
        </div>
      </div>
      <button className="end-session-button" onClick={endSession}>
        end session
      </button>
    </div>
  );
}

export default Timer;