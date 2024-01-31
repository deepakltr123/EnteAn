// components/MemeDisplay.js
import React from 'react';

const Memedisplay = ({ memes }) => {
  return (
    <div>
      {memes.map((meme, index) => (
        <div key={index} className="meme-container">
          <img src={meme.image} alt={meme.text} className="meme-image" />
          <p>{meme.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Memedisplay;
