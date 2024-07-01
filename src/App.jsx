import { useState } from 'react';
import image from './assets/bgimage.png';
import './index.css';
import Notes from './components/Notes';
import NotesContent from './components/NotesContent';


function Modal({ onClose, onSubmit }) {
  const [groupName, setGroupName] = useState("");

  const handleSubmit = () => {
    onSubmit(groupName);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create a New Note</h2>
        <label htmlFor="createGroup">Group Name: </label>
        <input
          id="createGroup"
          type="text"
          placeholder="Enter your group name"
          onChange={(e) => setGroupName(e.target.value)}
          value={groupName}
        />
        <button onClick={handleSubmit}>Create</button>
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default function App() {
  const [showNotes, setShowNotes] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState([]); // State for storing created notes
  const [title, setTitle] = useState("")
  const createNewNote = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addNote = (groupName) => {
    setNotes([...notes, groupName]);
  };

  const openingNotePage = (note)=>{
    setTitle(note)
    setShowNotes(!showNotes)
    
  }
  return (
    <>
      {showModal && <Modal onClose={closeModal} onSubmit={addNote} />}
      <div className="container">
        <div className='leftContainer'>
          <h2>Pocket Notes</h2>
          <button className= "createNewNotes" onClick={createNewNote}>&nbsp;+ Create Notes group</button>
          <div className='notesList' >  {/* New notes heading created here  */}
            {notes.map((note, index) => (
              <Notes key={index} heading={note} onClick={()=>openingNotePage(note)} />
            ))}
          </div>
        </div>
        <div className='rightContainer'>
          {showNotes ? <NotesContent name ={title}/>:(
            <>
              <img src={image} alt="background Image" />
              <h1>Pocket Notes</h1>
              <p>Send and received messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            </>
          )}
        </div>
      </div>

    </>
  );
}
