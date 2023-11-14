import React, { useState } from 'react';
import NotesInput from './components/notesInput';
import NotesList from './components/notesList';
import './App.css';

function App() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [editingNoteIndex, setEditingNoteIndex] = useState();
  const [editedNote, setEditedNote] = useState('');

  const createNote = () => {
    if (note !== '') {
      setNotes([...notes, note]);
      setNote('');
    }
  };

  const resetNote = () => {
    setNote('');
  };

  const deleteNote = (item) => {
    const newNotes = notes.filter((note) => {
      return note !== item;
    });
    setNotes(newNotes);
  };

  const startEditingNote = (index, item) => {
    setEditingNoteIndex(index);
    setEditedNote(item);
  };

  const saveEditedNote = () => {
    if (editedNote !== '') {
      const updatedNotes = [...notes];
      updatedNotes[editingNoteIndex] = editedNote;
      setNotes(updatedNotes);
      setEditingNoteIndex();
      setEditedNote('');
    }
  };

  const cancelEditingNote = () => {
    setEditingNoteIndex();
    setEditedNote('');
  };

  return (
    <div className="App">
      <h2>Notes</h2>
      <NotesInput
        note={note}
        setNote={setNote}
        createNote={createNote}
        resetNote={resetNote}
      />
      <NotesList
        notes={notes}
        deleteNote={deleteNote}
        startEditingNote={startEditingNote}
        editingNoteIndex={editingNoteIndex}
        editedNote={editedNote}
        saveEditedNote={saveEditedNote}
        cancelEditingNote={cancelEditingNote}
        setEditedNote={setEditedNote}
      />
    </div>
  );
}

export default App;
