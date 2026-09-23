import { FC } from 'react';

interface FieldNote {
  id: string;
  date: string;
  location: string;
  content: string;
  tags: string[];
}

const FieldNote: FC<{ note: FieldNote }> = ({ note }) => (
  <div className="field-note">
    <h4>{note.date} - {note.location}</h4>
    <div className="note-content" dangerouslySetInnerHTML={{ __html: note.content }} />
    <div className="tags">
      {note.tags.map(tag => (
        <span key={tag} className="tag">{tag}</span>
      ))}
    </div>
  </div>
);

export default FieldNote;