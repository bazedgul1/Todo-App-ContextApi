import { TodoProvider } from "./contexts/TodoContext";
import { ThemeProvider,useTheme } from "./contexts/ThemeContext";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-md"
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
const App = () => {
  return (
    <ThemeProvider>
      <TodoProvider>
        <div className="max-w-md mx-auto my-10 p-4 border rounded-md bg-slate-500">
          <header className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">To-Do App</h1>
            <ThemeToggle />
          </header>
          <AddTodo />
          <TodoList />
          <ToastContainer />
        </div>
      </TodoProvider>
    </ThemeProvider>
  );
};



export default App;
