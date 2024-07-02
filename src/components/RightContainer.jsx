import React from 'react';
import image from '../assets/bgimage.png';
import NotesContent from './NotesContent';
// import './rightContainer.css';

export default function RightContainer({ showNotes, title }) {
  return (
    <>
    <div className='rightContainer'>
      {showNotes ? (
        <NotesContent name={title} />
      ) : (
        <>
          <img src={image} alt="background" />
          <h1>Pocket Notes</h1>
          <p>
            Send and receive messages without keeping your phone online.
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
          </p>
        </>
      )}
    </div></>
  );
}
