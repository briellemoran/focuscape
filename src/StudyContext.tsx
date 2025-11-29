import React, { createContext, useContext, useState, ReactNode } from 'react';

interface StudyContextType {
  selectedMethod: string;
  selectedBackground: string;
  customWorkTime: number;
  customBreakTime: number;
  theme: 'light' | 'dark';
  setSelectedMethod: (method: string) => void;
  setSelectedBackground: (background: string) => void;
  setCustomWorkTime: (time: number) => void;
  setCustomBreakTime: (time: number) => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

const StudyContext = createContext<StudyContextType | undefined>(undefined);

export function StudyProvider({ children }: { children: ReactNode }) {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [selectedBackground, setSelectedBackground] = useState('');
  const [customWorkTime, setCustomWorkTime] = useState(25);
  const [customBreakTime, setCustomBreakTime] = useState(5);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <StudyContext.Provider 
      value={{ 
        selectedMethod, 
        selectedBackground,
        customWorkTime,
        customBreakTime,
        theme,
        setSelectedMethod, 
        setSelectedBackground,
        setCustomWorkTime,
        setCustomBreakTime,
        setTheme
      }}
    >
      {children}
    </StudyContext.Provider>
  );
}

export function useStudy() {
  const context = useContext(StudyContext);
  if (!context) {
    throw new Error('useStudy must be used within StudyProvider');
  }
  return context;
}