import { useState, useEffect } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import type { TodoTask } from './types';



function App() {
  const [todoList, setTodoList] = useState<TodoTask[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const aktiveTasks = todoList.filter((todo) => !todo.completed).length;

  const addTodo = () => {
    if (inputText.trim() === '') return;

    const newTodo: TodoTask = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };

    setTodoList([...todoList, newTodo]);
    setInputText('');
  };

  const deleteTodo = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearAllTasks = () => {
    setTodoList([]);
  };

  useEffect(() => {
    const lastSave = localStorage.getItem('todoJSON');
    if (lastSave) setTodoList(JSON.parse(lastSave));
  }, []);

  useEffect(() => {
    localStorage.setItem('todoJSON', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="container">
      <h1> Todo List </h1>
      <p>Aktive tasks: {aktiveTasks}</p>

      <AddTodo
        inputText={inputText}
        setInputText={setInputText}
        addTodo={addTodo}
      />

      <ul>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      <button
        className="deleteTasks"
        onClick={() => {
          clearAllTasks();
        }}
      >
        Delete all Tasks
      </button>
    </div>
  );
}

export default App;
