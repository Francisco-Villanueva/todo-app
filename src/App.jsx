import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import FilterTodos from "./components/FilterTodos";
function App() {
  return (
    <main className="app">
      <AddTodo />
      <FilterTodos />
      <TodoList />
    </main>
  );
}

export default App;
