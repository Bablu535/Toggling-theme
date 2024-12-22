import React, { createContext, useState } from 'react';

// Create the ThemeContext
export const ThemeContext = createContext();

// ThemeProvider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
