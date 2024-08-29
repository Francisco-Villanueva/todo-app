import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import FilterTodos from "./components/FilterTodos";
import { useEffect, useState } from "react";
function App() {
  const storedTodos = JSON.parse(localStorage.getItem("tareas") || "[]");
  const [inmmutableState, setInmmutableState] = useState(storedTodos);
  const [todos, setTodos] = useState(storedTodos);

  useEffect(() => {
    // Actaulizo localStorage cada vez que hay un cambio sobre nuestro estado todos.
    localStorage.setItem("tareas", JSON.stringify(inmmutableState));
  }, [inmmutableState]);

  const addTodo = (newTodo) => {
    //esta funcion sirve para agregar UNA SOLA tarea a nuestra lista!

    //validacion: verificar si el titulo ingresado ya existe.
    const existeTarea = todos.some(
      (element) => element.title === newTodo.title
    );
    if (existeTarea) {
      //cortar la ejecucion cuando pasa est error
      throw new Error(`La terea ${newTodo.title} ya existe!`);
    }

    setInmmutableState((prevState) => [...prevState, newTodo]);
    setTodos((prevState) => [...prevState, newTodo]);
  };
  const handleFilter = (filter) => {
    //esta funcion sirve para filtrar el listado de tareas!
    if (filter === "todas") {
      setTodos(inmmutableState);
    } else {
      if (filter === "done") {
        setTodos(inmmutableState.filter((tarea) => tarea.completed));
      } else {
        setTodos(inmmutableState.filter((tarea) => !tarea.completed));
      }
    }
  };
  const handleTask = (title) => {
    //esta funcion sirve para modoficiar la propiedad 'completed' de UNA tarea.
    const tareaACambiar = todos.find((element) => element.title === title);
    tareaACambiar.completed = !tareaACambiar.completed;
    setTodos(() => [...todos]);
  };

  const deleteTodo = (title) => {
    //esta funcion sirve para eliminar UNA tarea de nuestra lista
    const updatedTodos = inmmutableState.filter(
      (tarea) => tarea.title !== title
    );
    setInmmutableState(updatedTodos);
    setTodos(updatedTodos);
  };

  return (
    <main className=" text-text">
      <AddTodo addTodo={addTodo} />
      <FilterTodos
        handleFilter={handleFilter}
        todos={todos}
        inmmutableState={inmmutableState}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} handleTask={handleTask} />
    </main>
  );
}

export default App;
