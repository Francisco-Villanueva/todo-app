import React, { useContext } from "react";
import { TodosContext } from "../context/todos-provider";

export default function TodoItem({ task }) {
  //este componente recibe UNA tarea y la reenderiza.
  const { handleTask, getUserInfo } = useContext(TodosContext);
  const user = getUserInfo(task.userId);
  return (
    <div
      className={`todo-item ${task.completed ? "task-done" : ""} `}
      onClick={() => handleTask(task.title)}
    >
      <p className="todo-title">{task.title}</p>
      <p className="todo-owner">{user ? user.name : "nn"}</p>
    </div>
  );
}
