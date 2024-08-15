import React, { useEffect, useState } from "react";

export const TodosContext = React.createContext(); // Creacion del contexto

export default function TodosProvider({ children }) {
  // Creacion del proveedor del contexto
  const [initialState, setInitialState] = useState([]);
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState(initialState); // este listado es el que vamos a mostrar en nuestra apliacion.

  useEffect(() => {
    // efecto para hacer una carga inicial a nuestro proyecto.
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        const todos = data.slice(0, 50); // en todos tenemos las 10 tareas que vienen desde la API.

        setInitialState(todos);
        setTodos(todos);
      });
  }, []);
  useEffect(() => {
    // efecto para hacer una carga inicial a nuestro proyecto.
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // en todos tenemos las 10 tareas que vienen desde la API.

        setUsers(data);
      });
  }, []);

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
    setTodos((prevState) => [...prevState, newTodo]);
  };

  const getUserInfo = (id) => {
    return users.find((user) => user.id === id);
  };

  const handleFilter = (filter) => {
    //esta funcion sirve para filtrar el listado de tareas!
    if (filter === "todas") {
      setTodos(initialState);
    } else {
      if (filter === "done") {
        setTodos(initialState.filter((tarea) => tarea.completed));
      } else {
        setTodos(initialState.filter((tarea) => !tarea.completed));
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
