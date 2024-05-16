import React from 'react';

const Song = ({ id, title, artist, duration }) => {
    return (
      <li>
        <div>
          <h3>{title}</h3>
          <p>{artist}</p>
          <p>{duration}</p>
        </div>
      </li>
    );
  };
export default Song;
