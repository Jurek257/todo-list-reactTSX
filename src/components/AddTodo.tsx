import './AddTodo.css'

interface AddTodoProps {
  inputText: string;
  setInputText: (text: string) => void;
  addTodo: () => void;
}

function AddTodo({ inputText, setInputText, addTodo }: AddTodoProps) {
  return (
    <div className="addTodoElement">
      <input
        type="text"
        value={inputText}
        placeholder="Write a task..."
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
      />
      <button onClick={() => addTodo()}>ADD</button>
    </div>
  );
}
export default AddTodo;
