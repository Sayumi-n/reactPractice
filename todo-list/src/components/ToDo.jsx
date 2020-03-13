import React from "react";

const ToDo = ({ todos, deleteItem }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteItem(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left!</p>
  );
  return <div className="todo collection">{todoList}</div>;
};

export default ToDo;
