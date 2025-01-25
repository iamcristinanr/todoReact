import './TodoItems.css';


function TodoItems({ text }) {
  return (
    <li className="todo-item">
      <span className="check">✔</span>
      <p>{text}</p>
      <span className="delete">❌</span>
    </li>
  );
}

export { TodoItems };