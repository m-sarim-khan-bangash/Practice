import React, { useState, useEffect } from "react";
import '../App.css';

// Getting todos from local storage
const getTodosFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(todos);
  } else {
    return [];
  }
};

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(getTodosFromLocalStorage());

  // Adding todo
  const addTodo = () => {
    if (!inputValue) {
      return alert("Please enter a todo");
    } else {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  // Deleting todo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => {
      return i !== index;
    });
    setTodos(newTodos);
  };

  // Editing todo
  const editTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return prompt("Edit Todo", todo);
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // Clearing all todos
  const clearAll = () => {
    setTodos([]);
  };

  // Saving todos to local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <div>
              <button onClick={() => deleteTodo(index)}>Delete</button>
              <button className="edit-button" onClick={() => editTodo(index)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="clear-button" onClick={clearAll}>Clear All</button>
    </div>
  );
};

export default TodoApp;
