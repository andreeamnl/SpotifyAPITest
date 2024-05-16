import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Get the initial dark mode state from local storage or default to false
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  // Update local storage when dark mode state changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    // Set body background based on dark mode state
    document.body.classList.toggle('dark', darkMode);
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
            className="bg-teal hover:bg-hoverGray text-white font-bold py-2 px-4 rounded"
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
