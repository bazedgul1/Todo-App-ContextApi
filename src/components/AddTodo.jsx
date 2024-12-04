import { useState } from "react";
import { useTodos } from "../contexts/TodoContext";

const AddTodo = () => {
  const { addTodo } = useTodos();
  const [heading, setHeading] = useState("");

  const handleAdd = () => {
    if (heading.trim()) {
      addTodo({ id: Date.now(), heading });
      setHeading("");
    }
  };

  return (
    <div className="flex gap-2 my-4 ">
      <input
        type="text"
        placeholder="Add a task..."
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
        className="border p-2 rounded-md w-full"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Add
      </button>
    </div>
  );
};

export default AddTodo;
