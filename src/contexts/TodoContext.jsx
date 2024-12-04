import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

// eslint-disable-next-line react/prop-types
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => setTodos((prev) => [...prev, todo]);
  const deleteTodo = (id) => setTodos((prev) => prev.filter((todo) => todo.id !== id));
  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTodos = () => useContext(TodoContext);
