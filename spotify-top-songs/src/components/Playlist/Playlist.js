// components/Playlist/Playlist.js

import React from 'react';
import Song from '../Song/Song'; // Import the Song component from its new location
import songsData from '../../data/songs'; // Import songs.json from its new location

const Playlist = () => {
    return (
      <div className="playlist">
        <h2>My Playlist</h2>
        {songsData.map((song, index) => (
          <Song
            key={index}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
          />
        ))}
      </div>
    );
  };
export default Playlist;
