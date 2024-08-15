import React, { useEffect, useState } from "react";

export const TodosContext = React.createContext(); // Creacion del contexto

export default function TodosProvider({ children }) {
  // Creacion del proveedor del contexto
  const storedTodos = JSON.parse(localStorage.getItem("tareas") || "[]");
  const [inmmutableState, setInmmutableState] = useState(storedTodos);
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState(storedTodos); // este listado es el que vamos a mostrar en nuestra apliacion.

  useEffect(() => {
    // Actaulizo localStorage cada vez que hay un cambio sobre nuestro estado todos.
    if (todos.length > 0) {
      localStorage.setItem("tareas", JSON.stringify(inmmutableState));
    }
  }, [inmmutableState]);

  const addTodo = (newTodo) => {
    //esta funcion sirve para agregar UNA SOLA tarea a nuestra lista!

    //validacion: verificar si el titulo ingresado ya existe.
    const existeTarea = todos.some(
      (element) => element.title === newTodo.title
    );
    if (existeTarea) {
      alert(`La terea ${newTodo.title} ya existe!`);
      //cortar la ejecucion cuando pasa est error

      return;
    }
    setInmmutableState((prevState) => [...prevState, newTodo]);
    setTodos((prevState) => [...prevState, newTodo]);
  };

  const getUserInfo = (id) => {
    return users.find((user) => user.id === id);
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

  return (
    <TodosContext.Provider
      value={{ todos, addTodo, handleFilter, handleTask, users, getUserInfo }}
    >
      {children}
    </TodosContext.Provider>
  );
}
