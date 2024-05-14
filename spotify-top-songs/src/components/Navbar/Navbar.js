import React, { useState, useEffect } from 'react';

const Navbar = ({ onAddMusic }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Get the initial dark mode state from local storage or default to false
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  // Update local storage when dark mode state changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <nav className={`bg-${darkMode ? 'darkGray' : 'lightGray'} p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-teal text-xl font-bold">Playlistify</a>
        <div className="flex items-center">
          <button 
            className={`bg-teal hover:bg-hoverGray text-white font-bold py-2 px-4 rounded ${darkMode ? 'dark' : 'light'}-mode-btn`}
            onClick={onAddMusic}
          >
            Add Music
          </button>
          <button 
            className="bg-teal hover:bg-hoverGray text-white font-bold py-2 px-4 rounded ml-4"
            onClick={handleToggleDarkMode}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
