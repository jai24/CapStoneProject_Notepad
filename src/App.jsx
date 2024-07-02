
import { useState, useEffect } from 'react';
import './index.css';
import Notes from './components/Notes';
import RightContainer from './components/RightContainer';


function Modal({ onClose, onSubmit }) {
    const [groupName, setGroupName] = useState("");
  
    const handleSubmit = () => {
      onSubmit(groupName);
      onClose();
    };
    const handleKey = (e) =>{
      if(e.key==="Enter"){
        handleSubmit()
      }
    };
    return (
      <div className="modal">
        <div className="modal-content">
        <button className="closeButton" onClick={onClose}>X</button>
          <h3>Create New Notes Group</h3>
          <label htmlFor="createGroup">Group Name: </label>
          <input
            id="createGroup"
            type="text"
            placeholder="Enter your group name"
            onChange={(e) => setGroupName(e.target.value)}
            value={groupName}
            onKeyPress={handleKey}
          />
          <button className="createButton" onClick={handleSubmit}>Create</button>
          
        </div>
      </div>
    );
  }
  
export default function App() {
  const [showNotes, setShowNotes] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const createNewNote = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addNote = (groupName) => {
    if (groupName.trim() !== "") {
      setNotes([...notes, groupName]);
    }
  };

  const openingNotePage = (note) => {
    setTitle(note);
    setShowNotes(true);
  };

  return (
    <>
      {showModal && <Modal onClose={closeModal} onSubmit={addNote} />}
      <div className="container">
        <div className='leftContainer'>
          <h2>Pocket Notes</h2>
          <button className="createNewNotes" onClick={createNewNote}>
            + Create Notes group
          </button>
          <div className='notesList'>
            {notes.map((note, index) => (
              <Notes key={index} heading={note} onClick={() => openingNotePage(note)} />
            ))}
          </div>
        </div>
        <RightContainer showNotes={showNotes} title={title} />
      </div>
    </>
  );
}
