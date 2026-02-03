import type { TodoTask } from '../types';

import TrashIcon from '../assets/trash-slash-alt-svgrepo-com.svg'
import './TodoItem.css'

interface TodoItemProps {
  todo: TodoTask;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <li className="todoItem">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => deleteTodo(todo.id)}>
        <img src={TrashIcon} alt="delete" />
      </button>
    </li>
  );
}
export default TodoItem