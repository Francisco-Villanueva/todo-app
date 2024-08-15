import React, { useContext, useState } from "react";
import { TodosContext } from "../context/todos-provider";

export default function AddTodo() {
  const { addTodo } = useContext(TodosContext);

  const [newTask, setNewTask] = useState({
    title: "",
    completed: false,
  });

  const handleInputChange = (e) => {
    setNewTask((prevaState) => ({
      ...prevaState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.description !== "" && newTask.title !== "") {
      addTodo(newTask);
      setNewTask({
        title: "",
        completed: false,
      });
    }
  };
  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titulo de la tarea"
        onChange={handleInputChange}
        name="title"
        value={newTask.title}
      />

      <button type="submit" disabled={newTask.title.length === 0}>
        add
      </button>
    </form>
  );
}
