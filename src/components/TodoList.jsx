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
        <div className="flex flex-col items-center justify-center p-4">
          <p className="text-lg font-semibold text-gray-500">No hay tareas</p>
          <p className="text-sm text-gray-400">
            Agrega una nueva tarea para comenzar
          </p>
        </div>
      )}
    </div>
  );
}
