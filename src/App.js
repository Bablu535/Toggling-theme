import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import ThemedComponent from './ThemedComponent';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}-theme`}> {/* Dynamic theme class */}
      <ThemedComponent />
    </div>
  );
}

export default App;
