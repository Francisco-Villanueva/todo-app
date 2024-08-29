import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

import Button from "../common/Button";
import { motion, AnimatePresence } from "framer-motion";
import { UserService } from "../services/user.service";


export default function AddTodo() {
  const dispatch = useDispatch();

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [users, setUsers] = useState([]);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    owner: "",
    completed: false,
    date: new Date(),
  });

  useEffect(() => {
    // Si tuviesemos un litado de usuarios en un DB,
    //en este punto hacemos la call a la api para pedir ese listado de usuarios
    UserService.getUsers().then((res) => {
      setUsers(res);
    });
  }, []);

  const handleInputChange = (e) => {
    setNewTask((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (
        newTask.description !== "" &&
        newTask.title !== "" &&
        newTask.owner !== ""
      ) {
        dispatch(addTodo(newTask));
        setNewTask({
          title: "",
          description: "",
          owner: "",
          completed: false,
          date: new Date(),
        });
        setIsFormVisible(false);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="mb-4">
      <Button
        variant={"secondary"}
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        {isFormVisible ? "Cerrar formulario" : "Agregar nueva tarea"}
      </Button>
      <AnimatePresence>
        {isFormVisible && (
          <motion.form
            className="flex flex-col gap-2 mt-4 p-2 rounded-md bg-gray-300 border"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.input
              type="text"
              placeholder="Título de la tarea"
              onChange={handleInputChange}
              name="title"
              className="p-4 m-0 text-[12px]"
              value={newTask.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            />
            <motion.textarea
              placeholder="Descripción de la tarea"
              onChange={handleInputChange}
              name="description"
              className="p-4 m-0 h-24 resize-none text-[12px]"
              value={newTask.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
            <motion.select
              onChange={handleInputChange}
              name="owner"
              className="p-4 m-0 text-[12px]"
              value={newTask.owner}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <option value="">Seleccionar responsable</option>
              {users.map((user) => (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              ))}
            </motion.select>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                type="submit"
                disabled={
                  newTask.title.length === 0 ||
                  newTask.description.length === 0 ||
                  newTask.owner.length === 0
                }
                className={"font-light"}
              >
                Agregar tarea
              </Button>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
