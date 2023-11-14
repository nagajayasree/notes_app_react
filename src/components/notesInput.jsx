import React from 'react';

function NotesInput({ note, setNote, createNote, resetNote }) {
  return (
    <div style={{ justifyContent: 'center' }}>
      <div>
        <textarea
          rows={10}
          cols={80}
          placeholder="Write your notes here..."
          name="note"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
        <div
          style={{
            flexDirection: 'row',
          }}
        >
          <button onClick={createNote}>Create</button>
          <button onClick={resetNote}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default NotesInput;
