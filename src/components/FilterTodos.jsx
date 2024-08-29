import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleFilter } from "../redux/todoSlice";

export default function FilterTodos({ handleFilter, todos, inmmutableState }) {
  // Este componente ejecuta filtros sobre el listado de tareas.

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const inmmutableState = useSelector((state) => state.todo.inmmutableState);


  return inmmutableState.length > 0 ? (
    <div className="flex items-center justify-between  py-2">
      <div className="flex items-center gap-2 text-black">
        <p> Filtros </p>
        <div className="size-6  text-xs bg-gray-200 border grid place-items-center rounded-full">
          <span> {todos.length} </span>
        </div>
      </div>
      <select
        onChange={(e) => dispatch(handleFilter(e.target.value))}
        className="text-sm m-0 p-1 px-3 pr-8"
      >
        <option value="todas">todas</option>
        <option value={"done"}>Hechas</option>
        <option value={"noDone"}>No hechas</option>
      </select>
    </div>
  ) : null;
}
