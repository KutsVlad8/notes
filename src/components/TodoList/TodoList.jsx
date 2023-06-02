export const TodoList = ({ todoNotes, onDelete }) => {
  return (
    <ul>
      {todoNotes.map(({ id, name, note }) => (
        <li key={id}>
          {name}:{note}
          <button type="button" onClick={() => onDelete(id)}>
            delete note
          </button>
        </li>
      ))}
    </ul>
  );
};
