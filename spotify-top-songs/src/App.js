import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Playlist from './components/Playlist/Playlist';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import './App.css';

function App() {
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout(prevState => !prevState);
  };

  return (
    <div className="App">
      <Navbar toggleAbout={toggleAbout} />
      {showAbout && <About />}
      <Playlist />
      <Footer />
    </div>
  );
}

export default App;
