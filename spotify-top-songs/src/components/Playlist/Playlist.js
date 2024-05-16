import React from 'react';
import Song from '../Song/Song'; // Import the Song component from its new location
import songsData from '../../data/songs'; // Import songs.json from its new location

const Playlist = () => {
  return (
    <div className="playlist bg-lightGray text-black p-4 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-black">
        <span className="bg-teal px-2 py-1 rounded-lg">
          My Daily Playlist
        </span>
      </h2>
      <ul>
        {songsData.map((song, index) => (
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
