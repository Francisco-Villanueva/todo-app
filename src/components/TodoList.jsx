import React, { useContext, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../context/todos-provider";
import { motion, AnimatePresence } from "framer-motion";

export default function TodoList() {
  const { todos } = useContext(TodosContext);
  const [animatedTodos, setAnimatedTodos] = useState(todos);

  useEffect(() => {
    setAnimatedTodos(todos);
  }, [todos]);

  return (
    <div className="">
      {animatedTodos.length > 0 ? (
        <>
          <div className="flex flex-col gap-5 p-4  max-h-[80vh] overflow-auto">
            <AnimatePresence>
              {animatedTodos.map((task) => (
                <motion.div
                  key={task.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <TodoItem task={task} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center p-4 h-[80vh] bg-gray-100 rounded-xl">
          <svg
            className="w-24 h-24 mb-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          <p className="text-lg font-semibold text-gray-600">No hay tareas</p>
          <p className="text-sm text-gray-500">
            Agrega una nueva tarea para comenzar
          </p>
        </div>
      )}
    </div>
  );
}
