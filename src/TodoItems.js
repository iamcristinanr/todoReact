import './TodoItems.css';

function TodoItems({ text, category, onStart, onComplete, onDelete}) {
  return (
    <li className="todo-item">
      <p>{text}</p>

      {category !== 'Done' && (
        <div className="todo-actions">
          {category === 'To Do' && (
            <>
              <span className="start"onClick={onStart}>▶ </span>
              <span className="complete" onClick={onComplete}>✔ </span>
              <span className="delete"onClick = {onDelete}>🗙 </span>
            </>
          )}

          {category === 'Doing' && (
            <>
              <span className="complete"onClick={onComplete}>✔ </span>
              <span className="delete"onClick = {onDelete}>🗙 </span>
            </>
          )}
        </div>
      )}

      {category === 'Done' && <span className="done-label">☑️</span>}
    </li>
  );
}

export { TodoItems };