import React from 'react';

function NotesList({
  notes,
  deleteNote,
  startEditingNote,
  editingNoteIndex,
  editedNote,
  saveEditedNote,
  cancelEditingNote,
  setEditedNote,
}) {
  return (
    <div>
      {notes.length !== 0 ? (
        notes.map((note, index) => (
          <div key={index}>
            {index === editingNoteIndex ? (
              <div>
                <input
                  type="text"
                  value={editedNote}
                  onChange={(e) => setEditedNote(e.target.value)}
                />
                <button onClick={() => saveEditedNote()}>Save</button>
                <button onClick={() => cancelEditingNote()}>Cancel</button>
              </div>
            ) : (
              <>
                {note}
                <button onClick={() => startEditingNote(index, note)}>
                  Edit
                </button>
                <button onClick={() => deleteNote(note)}>Delete</button>
              </>
            )}
          </div>
        ))
      ) : (
        <div>
          <h3>No Notes found!</h3>
        </div>
      )}
    </div>
  );
}

export default NotesList;
