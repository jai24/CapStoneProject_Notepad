import { useState, useEffect } from 'react';
import './notes.css';

export default function NotesContent({ name }) {
    const [noteContent, setNoteContent] = useState('');
    const [noteList, setNoteList] = useState([]);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem(name)) || [];
        setNoteList(savedNotes);
    }, [name]);

    const formatDate = (date) => {  // handling date and time
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
        return new Date(date).toLocaleString('en-US', options);
    };

    const handleAddNote = () => {  //to update in backend 
        const newNote = {
            content: noteContent,
            createdAt: new Date(),
        };
        const updatedNotes = [...noteList, newNote];
        setNoteList(updatedNotes);
        localStorage.setItem(name, JSON.stringify(updatedNotes));
        setNoteContent('');
    };

    return (
        <div className='overall'>
            <header>
                <span>{name.substring(0, 2).toUpperCase()}</span>
                <h1 className="key">{name}</h1>
            </header>
            
            <div className="note-list">
                {noteList.map((note, index) => (
                    <div key={index} className="note-item">
                        <p >{formatDate(note.createdAt)}</p>
                        <p className='contentInput'>{note.content}</p>
                    </div>
                ))}
            </div>
            <input 
                className='inputText'
                placeholder='Enter your text here......'
                type="text"
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddNote()}
            />
        </div>
    );
}
