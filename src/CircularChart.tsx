import React from 'react';
import './CircularChart.css';

interface CircularChartProps {
  studyTime: number;
  breakTime: number;
}

function CircularChart({ studyTime, breakTime }: CircularChartProps) {
  const total = studyTime + breakTime;
  const studyPercentage = (studyTime / total) * 100;
  const breakPercentage = (breakTime / total) * 100;
  
  //SVG circle properties
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  
  //calculate stroke dash offsets
  const studyDash = (studyPercentage / 100) * circumference;
  const breakDash = (breakPercentage / 100) * circumference;
  
  return (
    <div className="circular-chart">
      <svg width="200" height="200" viewBox="0 0 200 200">
        {/* background circle */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="20"
        />
        
        {/* study time arc */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#764ba2"
          strokeWidth="20"
          strokeDasharray={`${studyDash} ${circumference}`}
          strokeDashoffset="0"
          transform="rotate(-90 100 100)"
          strokeLinecap="round"
        />
        
        {/* break time arc */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#b8a3d6"
          strokeWidth="20"
          strokeDasharray={`${breakDash} ${circumference}`}
          strokeDashoffset={-studyDash}
          transform="rotate(-90 100 100)"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default CircularChart;