import './TodoFilter.css';

function TodoFilter({searchValue, setSearchValue}) {
  return (
    <input 
      className="todo-filter"
      placeholder="What have we to do?"
      value = {searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    />
  );
}

export { TodoFilter };
