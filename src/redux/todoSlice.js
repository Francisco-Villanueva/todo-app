import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: JSON.parse(localStorage.getItem("tareas") || "[]"),
    inmmutableState: JSON.parse(localStorage.getItem("tareas") || "[]")
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = action.payload;
            const existeTarea = state.todos.some(
                (element) => element.title === newTodo.title
            );
            if (existeTarea) {
                throw new Error(`La tarea ${newTodo.title} ya existe!`);
            }
            state.todos.push(newTodo);
            state.inmmutableState.push(newTodo);
            localStorage.setItem("tareas", JSON.stringify(state.inmmutableState));
        },
        handleFilter: (state, action) => {
            const filter = action.payload;
            if (filter === "todas") {
                state.todos = state.inmmutableState;
            } else if (filter === "done") {
                state.todos = state.inmmutableState.filter((tarea) => tarea.completed);
            } else {
                state.todos = state.inmmutableState.filter((tarea) => !tarea.completed);
            }
        },
        handleTask: (state, action) => {
            const title = action.payload;
            const tareaACambiar = state.todos.find((element) => element.title === title);
            if (tareaACambiar) {
                tareaACambiar.completed = !tareaACambiar.completed;
                const inmmutableTarea = state.inmmutableState.find((element) => element.title === title);
                if (inmmutableTarea) {
                    inmmutableTarea.completed = tareaACambiar.completed;
                }
                localStorage.setItem("tareas", JSON.stringify(state.inmmutableState));
            }
        },
        deleteTodo: (state, action) => {
            const title = action.payload;
            state.todos = state.todos.filter((tarea) => tarea.title !== title);
            state.inmmutableState = state.inmmutableState.filter((tarea) => tarea.title !== title);
            localStorage.setItem("tareas", JSON.stringify(state.inmmutableState));
        }
    }
});

export const { addTodo, handleFilter, handleTask, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;