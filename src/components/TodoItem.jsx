import React, { useContext } from "react";
import { TodosContext } from "../context/todos-provider";
import Button from "../common/Button";
import { formateTime } from "../utilities/format-date";
import { FaTrash } from "react-icons/fa";

export default function TodoItem({ task }) {
  const { handleTask, deleteTodo } = useContext(TodosContext);

  return (
    <div
      className={`bg-bg-background   p-2 px-4 rounded-xl space-y-1 transition-all duration-300 ${
        task.completed ? " line-through opacity-30" : ""
      } `}
    >
      <p className="font-semibold">{task.title}</p>
      <p className="font-light text-sm">{task.description}</p>

      <section className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs">
          <Button variant={"primary"} onClick={() => handleTask(task.title)}>
            <p>Marcar tarea</p>
          </Button>
          <Button
            variant={"destructive"}
            onClick={() => deleteTodo(task.title)}
          >
            <FaTrash />
          </Button>
        </div>
        <p className="text-xs font-light">
          {task.date ? formateTime(task.date) : "nn"}
        </p>
      </section>
    </div>
  );
}
