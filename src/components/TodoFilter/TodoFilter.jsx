export const TodoFilter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      Find notes by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
