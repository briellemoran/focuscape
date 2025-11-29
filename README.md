# Focuscape

Focuscape is a study timer web application designed to help students focus and stay organized during their study sessions. It combines proven timed study techniques with carefully designed backgrounds that use color psychology to support productivity and well-being.

## Features

- **Multiple Study Techniques**
  - Pomodoro (25 min work / 5 min break)
  - 52-17 Method (52 min work / 17 min break)
  - 90-Minute Technique (90 min work / 20 min break)
  - Custom Timer (set your own intervals)

- **Designed Backgrounds**
  - Focus: cool, calming gradients for concentration
  - Energize: warm tones for motivation
  - Calm: nature-inspired colors for peaceful work
  - Random & Classic options

- **Session Tracking**
  - Automatic work/break cycling
  - Session summary with total study and break time
  - Visual progress chart showing breakdown of study time v. break time

- **Customization**
  - Light/Dark mode
  - Responsive design for all devices

## Tech Stack

- React 18 with TypeScript
- React Router for navigation
- React Context API for state management
- CSS with responsive design (clamp, vmin, flexbox)
- React Icons

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/focuscape.git
cd focuscape
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Building for Production
```bash
npm run build
```

Builds the app for production to the `build` folder.

## Project Structure
```
focuscape/
├── public/
├── src/
│   ├── App.tsx           # Main app component with routing
│   ├── Main.tsx          # Landing page with clock
│   ├── Home.tsx          # About page
│   ├── Customize.tsx     # Study method & background selection
│   ├── Timer.tsx         # Active timer page
│   ├── Settings.tsx      # Settings sidebar
│   ├── Navbar.tsx        # Navigation bar
│   ├── StudyContext.tsx  # Global state management
│   ├── CircularChart.tsx # Summary visualization
│   └── *.css            # Component styles
└── README.md
```

## Author
Brielle Moran