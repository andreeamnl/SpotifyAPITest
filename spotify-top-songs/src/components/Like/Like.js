import React, { useState, useEffect } from 'react';
import LikedIcon from '../Like/LikedIcon.jsx';
import UnlikedIcon from '../Like/UnlikedIcon.jsx';

const Like = ({ songId }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const playlist = JSON.parse(localStorage.getItem('playlist')) || [];
    const song = playlist.find(song => song.id === songId);
    if (song && song.liked) {
      setLiked(true);
    }
  }, [songId]);

  const toggleLiked = () => {
    setLiked(prevLiked => !prevLiked);
  };

  return (
    <div onClick={toggleLiked}>
      {liked ? <LikedIcon /> : <UnlikedIcon />}
    </div>
  );
};

export default Like;
