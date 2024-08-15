import React, { useContext } from "react";
import { TodosContext } from "../context/todos-provider";

export default function FilterTodos() {
  // Este componente ejecuta filtros sobre el listado de tareas.
  const { handleFilter } = useContext(TodosContext);
  return (
    <div className="filter-container">
      <span>Filtros</span>
      <select onChange={(e) => handleFilter(e.target.value)}>
        <option value="todas">todas</option>
        <option value={"done"}>Hechas</option>
        <option value={"noDone"}>No hechas</option>
      </select>
    </div>
  );
}
