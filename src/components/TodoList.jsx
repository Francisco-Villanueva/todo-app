import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../context/todos-provider";

export default function TodoList() {
  // Este componente reenderiza el listado de tareas.
  const { todos } = useContext(TodosContext);

  return (
    <div className="todo-list-container">
      <p>Resultados: {todos.length}</p>
      <div className="todolist">
        {todos.map((task) => (
          <TodoItem task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}
