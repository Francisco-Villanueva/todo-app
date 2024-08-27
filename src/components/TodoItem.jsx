import React, { useContext } from "react";
import { TodosContext } from "../context/todos-provider";
import Button from "../common/Button";
import { formateTime } from "../utilities/format-date";

export default function TodoItem({ task }) {
  const { handleTask, deleteTodo } = useContext(TodosContext);

  return (
    <div
      className={`bg-bg-background p-2 px-4 rounded-xl space-y-1 ${
        task.completed ? "task-done" : ""
      } `}
    >
      <p className="font-semibold">{task.title}</p>
      <p className="font-light text-sm">{task.description}</p>

      <section className="flex items-center justify-between">
        <div className="space-x-2">
          <Button onClick={() => handleTask(task.title)}>
            <p className="text-[13px] font-light">Marcar tarea</p>
          </Button>
          <Button
            variant={"destructive"}
            onClick={() => deleteTodo(task.title)}
          >
            <p className="text-[13px] font-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </p>
          </Button>
        </div>
        <p className="text-xs font-light">
          {task.date ? formateTime(task.date) : "nn"}
        </p>
      </section>
    </div>
  );
}
