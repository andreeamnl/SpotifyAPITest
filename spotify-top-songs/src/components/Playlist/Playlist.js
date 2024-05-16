// Playlist.js

import React, { useState, useEffect } from 'react';
import Song from '../Song/Song'; 
import Shuffle from '../Shuffle/Shuffle'; 

import songsData from '../../data/songs'; 

const Playlist = () => {
    const handleShuffle = (shuffledPlaylist) => {
        // Set the shuffled playlist in the component state
        setPlaylist(shuffledPlaylist);
    };
    
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    // Check if songs data exists in local storage
    const storedSongs = localStorage.getItem('playlist');
    if (storedSongs) {
      setPlaylist(JSON.parse(storedSongs));
    } else {
      // If not, use default songs data and save it to local storage
      setPlaylist(songsData);
      localStorage.setItem('playlist', JSON.stringify(songsData));
    }
  }, []);

  return (
    <div className="playlist bg-lightGray text-black p-4 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">
        <span className="bg-teal px-2 py-1 rounded-lg text-white">
          My Daily Playlist
        </span>{' '}
      </h2>
      <Shuffle onShuffle={handleShuffle} /> {/* Pass handleShuffle function as prop */}
      <ul>
        {playlist.map((song, index) => (
          <Song
            key={index}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
            className="mb-4"
          />
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
