import './TodoList.css';

function TodoList({ title, children }) {
  return (
    <div className="todo-list-container">
      <h2 className="todo-list-title">{title}</h2>
      <ul className="todo-list">
        {children}
      </ul>
    </div>
  );
}

export { TodoList };