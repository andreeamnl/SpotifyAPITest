import React from 'react';

const Song = ({ id, title, artist, duration }) => {
  return (
    <li className="flex items-center py-3 px-4 hover:bg-hoverGray transition duration-300 ease-in-out">
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-teal">{title}</h3>
        <p className="text-sm text-gray-500">{artist}</p>
      </div>
      <p className="text-sm text-gray-500">{duration}</p>
    </li>
  );
};

export default Song;
