import React from "react";
import { useDispatch } from "react-redux";
import { handleTask, deleteTodo } from "../redux/todoSlice";
import Button from "../common/Button";
import { formateTime } from "../utilities/format-date";
import { FaTrash } from "react-icons/fa";

export default function TodoItem({ task }) {
  const dispatch = useDispatch();

  return (
    <div
      className={`bg-bg-background   p-2 px-4 rounded-xl space-y-4 transition-all duration-300 ${
        task.completed ? " line-through opacity-30" : ""
      } `}
    >
      <div className="flex items-center justify-between">
        <p className="font-semibold  w-2/3 max-w-2/3 truncate">{task.title}</p>
        <span className="text-sm text-primary p-1 px-4 rounded-md bg-gray-100 w-1/3 overflow-hidden text-ellipsis whitespace-nowrap">
          {task.owner || "Not assigned"}
        </span>
      </div>
      <p className="font-light text-sm">{task.description}</p>

      <section className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs">
          <Button
            variant={"primary"}
            onClick={() => dispatch(handleTask(task.title))}
          >
            <p>Marcar tarea</p>
          </Button>
          <Button
            variant={"destructive"}
            onClick={() => dispatch(deleteTodo(task.title))}
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
