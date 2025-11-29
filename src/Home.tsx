import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <h2>welcome to</h2>
      <h3>focuscape</h3>
      
      <div className="home-content">
        <p>
          Focuscape is a study timer tool designed to help students focus and stay 
          organized during their study sessions. As a student myself, I've done extensive 
          research about the most effective study methods, but I've found that it can be 
          difficult to hold yourself accountable and maintain consistency. That's why I 
          created Focuscape as an environment that combines proven timed study techniques 
          with carefully designed backgrounds that use color psychology to evoke specific 
          states of focus, calm, or energy, supporting both your productivity and well-being.
        </p>
        
        <p>
          Each study method offers a different approach to managing your time. The Pomodoro 
          technique (25 minutes work, 5 minutes break) is ideal for maintaining sustained 
          focus on tasks that require deep concentration, with frequent breaks preventing 
          burnout. The 52-17 method (52 minutes work, 17 minutes break) works well for 
          longer, more immersive tasks where you need extended periods of uninterrupted 
          focus. The 90-minute technique (90 minutes work, 20 minutes break) aligns with 
          your body's natural ultradian rhythms, making it perfect for deep work sessions 
          on complex projects or intensive studying. The backgrounds complement these 
          techniques through intentional color choices: Focus backgrounds use cool, calming 
          gradients to promote concentration and reduce mental distraction; energize 
          backgrounds incorporate warmer tones to boost motivation during longer sessions; 
          and calm backgrounds feature soft, nature-inspired colors to create a peaceful 
          atmosphere for deep work. Every element was designed to support your cognitive 
          performance while creating a space that feels both functional and beautiful.
        </p>
      </div>
    </div>
  );
}

export default Home;