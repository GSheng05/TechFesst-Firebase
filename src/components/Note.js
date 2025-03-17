/*import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;
*/
import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { MdEdit, MdSave } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote, handleUpdateNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editText.trim().length > 0) {
      handleUpdateNote(id, editText);
      setIsEditing(false);
    }
  };

  return (
    <div className="note">
      {isEditing ? (
        <textarea
          rows="8"
          cols="10"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        ></textarea>
      ) : (
        <span>{text}</span>
      )}
      <div className="note-footer">
        <small>{date}</small>
        <div>
          {isEditing ? (
            <MdSave
              onClick={handleSave}
              className="save-icon"
              size="1.3em"
            />
          ) : (
            <MdEdit
              onClick={handleEdit}
              className="edit-icon"
              size="1.3em"
            />
          )}
          <MdDeleteForever
            onClick={() => handleDeleteNote(id)}
            className="delete-icon"
            size="1.3em"
          />
        </div>
      </div>
    </div>
  );
};

export default Note;