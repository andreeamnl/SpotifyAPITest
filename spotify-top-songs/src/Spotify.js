import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Spotify = () => {
  const [topSongs, setTopSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me/top/tracks?limit=10', {
          headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN_HERE'
          }
        });

        setTopSongs(response.data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Top 10 Listened Songs on Spotify</h1>
      <ul>
        {topSongs.map((song, index) => (
          <li key={index}>{song.name} - {song.artists.map(artist => artist.name).join(', ')}</li>
        ))}
      </ul>
    </div>
  );
};

export default Spotify;
