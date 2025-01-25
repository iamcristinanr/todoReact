import React from 'react';
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

  const todosToDo = todos.filter(todo => todo.category === 'To Do');
  const todosDoing = todos.filter(todo => todo.category === 'Doing');
  const todosDone = todos.filter(todo => todo.category === 'Done');

  const completedTodos = todos.filter(todo =>
    todo.completed).length;
  const totalTodos = todos.length;

  return (
    
    <div className="app-container">
      <TodoCount completed={completedTodos} total={totalTodos}  />
      <TodoFilter />

      <div className="todo-lists-container">
        <TodoList title="To Do">
          {todosToDo.map(todo => (
            <TodoItems key={todo.text} text={todo.text} completed={todo.completed} />
          ))}
        </TodoList>

        <TodoList title="Doing">
          {todosDoing.map(doing => (
            <TodoItems key={doing.text} text={doing.text} completed={doing.completed} />
          ))}
        </TodoList>

        <TodoList title="Done">
          {todosDone.map(done => (
            <TodoItems key={done.text} text={done.text} completed={done.completed} />
          ))}
        </TodoList>
      </div>

      <TodoButton />
    </div>
  );
}


export default App;
