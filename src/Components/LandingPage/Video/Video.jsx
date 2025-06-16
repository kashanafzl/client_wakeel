import React, { useState } from 'react';
import './Video.css';

import videoimg from '../../../Asserts/Img/videoimg.svg';
import playicon from '../../../Asserts/Img/playicon.svg';
import video from '../../../Asserts/Img/lvideo.mp4'

export default function Video() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <div className="maindivofvideo">
        <h1>Our Goals & Achievements <br /> in Legal Practice</h1>
        <p>
          Whether you're a business owner, an individual facing legal challenges, or a family seeking guidance,
          Legal Sphere is dedicated to securing the best possible outcome for you.
        </p>

        <div className="videoimgdiv">
          <img className="videoimg" src={videoimg} alt="Video Thumbnail" />
          <img
            className="playicon"
            src={playicon}
            alt="Play Icon"
            onClick={openModal}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <iframe
              width="100%"
              height="500"
              src={video}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
