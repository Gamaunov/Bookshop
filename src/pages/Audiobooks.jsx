import React from 'react';
import { Link } from 'react-router-dom';
import AudioPlayer from '../components/audioPlayer/AudioPlayer';

const Audiobooks = () => {
  return (
    <section className="audiobooks">
      <div className="audiobooks__inner">
        <AudioPlayer />
      </div>
      <Link className="audiobooks__btn" to="/">
        <button className="btn">Go Back 🧐</button>
      </Link>
    </section>
  );
};

export default Audiobooks;
