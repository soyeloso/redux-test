import React from "react";
import { TodoList } from "./features/todo-list/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

export default App;
