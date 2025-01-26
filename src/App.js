import React, { useState } from 'react';
import './App.css';
import { TodoCount } from './TodoCount';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';
import { TodoItems } from './TodoItems';
import { TodoButton } from './TodoButton';

const initialTodos = [
  { text: 'Cut Onion', completed: false, category: 'To Do' },
  { text: 'Learn React', completed: false, category: 'To Do' },
  { text: 'Write documentation', completed: false, category: 'Doing' },
  { text: 'Fix bugs', completed: false, category: 'Doing' },
  { text: 'Go to the gym', completed: true, category: 'Done' },
  { text: 'Buy bread', completed: true, category: 'Done' },
];

function App() {
  const [todos, setTodos] = React.useState(initialTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTodoText, setNewTodoText] = useState('');

  const todosToDo = todos
    .filter(todo => todo.category === 'To Do')
    .filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const todosDoing = todos
    .filter(todo => todo.category === 'Doing')
    .filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const todosDone = todos
    .filter(todo => todo.category === 'Done')
    .filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const completedTodos = todos.filter(todo =>
    todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => 
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const startTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].category = "Doing";
    setTodos(newTodos);
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    newTodos[todoIndex].category = "Done";
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);

  }

  const addNewTodo = () => {
    if (newTodoText.trim() !== '') {
      setTodos([...todos, { text: newTodoText, completed: false, category: 'To Do' }]);
      setNewTodoText('');
      setIsModalOpen(false);
    }
  };

  return (
    
    <div className="app-container">
      <TodoCount completed={completedTodos} total={totalTodos}  />
      <TodoFilter 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <div className="todo-lists-container">
      <TodoList title="To Do">
          {searchedTodos
            .filter(todo => todo.category === 'To Do')
            .map(todo => (
              <TodoItems 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              category="To Do"
              onStart={() => startTodo(todo.text)}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />
            ))}
        </TodoList>

        <TodoList title="Doing">
          {searchedTodos
            .filter(todo => todo.category === 'Doing')
            .map(todo => (
              <TodoItems
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              category="Doing" 
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />
            ))}
        </TodoList>

        <TodoList title="Done">
          {searchedTodos
            .filter(todo => todo.category === 'Done')
            .map(todo => (
              <TodoItems 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              category="Done"
              onDelete={() => deleteTodo(todo.text)}
              />
            ))}
        </TodoList>
      </div>

      <TodoButton onClick={() => setIsModalOpen(true)} />

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New To Do</h2>
            <input 
              type="text"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              placeholder="Enter new task..."
            />
            <div className="modal-actions">
              <button className="add-btn" onClick={addNewTodo}>Add</button>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default App;
