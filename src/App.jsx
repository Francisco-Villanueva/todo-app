import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import FilterTodos from "./components/FilterTodos";
import Loader from "./common/Loader";
function App() {
  return (
    <main className=" text-text">
      <AddTodo />

      <FilterTodos />

      <TodoList />
    </main>
  );
}

export default App;
