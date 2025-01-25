import './TodoCount.css';

function TodoCount({completed, total}){
    return (
        <h1 className="todo-count">
            You have {completed} of {total} completed
        </h1>
    )
  }
  
  export { TodoCount }