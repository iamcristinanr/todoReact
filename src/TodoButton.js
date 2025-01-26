import './TodoButton.css';

function TodoButton({onClick}) {
  return (
    <button className="todo-button" onClick={onClick}>
      Add Todo
    </button>
  );
}

export { TodoButton };