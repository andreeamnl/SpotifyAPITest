import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Playlist from './components/Playlist/Playlist';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Playlist />
    </div>
  );
}

export default App;
