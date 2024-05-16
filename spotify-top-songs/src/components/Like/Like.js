import React, { useState, useEffect } from 'react';
import LikedIcon from '../Like/LikedIcon.jsx';
import UnlikedIcon from '../Like/UnlikedIcon.jsx';

const Like = ({ songId }) => {
  const [liked, setLiked] = useState(() => {
    const likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || {};
    return likedSongs[songId] || false;
  });

  useEffect(() => {
    const likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || {};
    likedSongs[songId] = liked;
    localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
  }, [liked, songId]);

  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    <div onClick={toggleLiked}>
      {liked ? <LikedIcon /> : <UnlikedIcon />}
    </div>
  );
};

export default Like;
