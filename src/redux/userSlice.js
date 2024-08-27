import { createSlice } from "@reduxjs/toolkit";

const estadoInicial = {
    name:"",
    username:"",
    email:""
}


export const userSlice = createSlice({
    name:"user",
    initialState: estadoInicial,
    reducers:{
        setUser: (state,action)=>{
            const user = action.payload
            return  state = user
        },
        changeEmail: (state,action)=>{
            const email = action.payload
            return state.email = email
        },
        changeName: (state, action)=>{
            const name = action.payload
            return state.name = name
        }
    }
})


export const {setUser,changeEmail, changeName} = userSlice.actions
export default userSlice.reducer