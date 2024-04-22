import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [topSongs, setTopSongs] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    const mode = localStorage.getItem('darkMode');
    return mode ? JSON.parse(mode) : false;
  });

  useEffect(() => {
    fetchTopSongs();
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const fetchTopSongs = async () => {
    try {
      const response = await fetch('sp_endpoint');
      const data = await response.json();
      setTopSongs(data.topSongs);
    } catch (error) {
      console.error('Error fetching top songs:', error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <header>
        <nav>
          <ul>
            <li><a href="#top-songs">Top Songs</a></li>
            <li><a href="#about">About</a></li>
            {/* Add more links here */}
          </ul>
          <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        </nav>
        <h1>Top 10 Songs on Spotify</h1>
      </header>
      <main>
        <section id="top-songs">
          <h2>Top Songs</h2>
          <ul>
            {topSongs.map((song, index) => (
              <li key={index}>
                <span>{index + 1}. </span>
                <span>{song.name} by {song.artist}</span>
              </li>
            ))}
          </ul>
        </section>
        <section id="about">
          <h2>About</h2>
          <p>Add some information about your app here.</p>
        </section>
        {/* */}
      </main>
      <footer>
        <p>Footer placeholder</p>
      </footer>
    </div>
  );
}

export default App;
