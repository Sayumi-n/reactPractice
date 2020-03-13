import React from "react";
import Todo from "./ToDo";
import AddFrom from "./AddForm";

class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: "but some milk" },
      { id: 2, content: "play piano" }
    ]
  };

  deleteItem = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    });
  };
  addItem = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
  };

  render() {
    return (
      <div className="todo-list container">
        <h1 className="center blue-text">To Do List</h1>
        <Todo todos={this.state.todos} deleteItem={this.deleteItem} />
        <AddFrom addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
