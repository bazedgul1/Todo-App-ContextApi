import { useTodos } from "../contexts/TodoContext";
import { useState } from "react";
import { toast } from "react-toastify";

const TodoList = () => {
  const { todos, deleteTodo, updateTodo } = useTodos();
  const [editId, setEditId] = useState(null); 
  const [editText, setEditText] = useState(""); 

  const handleDelete = (id) => {
    deleteTodo(id);
    toast.error("Task deleted successfully!", { position: "bottom-right" });
  };

  const handleEdit = (id, currentText) => {
    setEditId(id);
    setEditText(currentText);
  };

  const handleSave = (id) => {
    if (editText.trim() === "") {
      toast.warning("Task cannot be empty!", { position: "bottom-right" });
      return;
    }
    updateTodo(id, { heading: editText });
    setEditId(null);
    setEditText("");
    toast.success("Task updated successfully!", { position: "bottom-right" });
  };

  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 text-black dark:text-white p-2 my-2 rounded-md"
        >
          {editId === todo.id ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="flex-grow border p-1 rounded-md mr-2"
            />
          ) : (
            <span>{todo.heading}</span>
          )}
          <div className="flex items-center gap-2">
            {editId === todo.id ? (
              <button
                onClick={() => handleSave(todo.id)}
                className="text-green-500 dark:text-green-300 hover:underline"
              >
                ✅ Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(todo.id, todo.heading)}
                className="text-blue-500 dark:text-blue-300 hover:underline"
              >
                ✏️ Edit
              </button>
            )}
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-500 dark:text-red-300 hover:underline"
            >
              ❌ Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
