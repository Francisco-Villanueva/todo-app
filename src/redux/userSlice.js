import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"",
    username:"",
    email:""
}


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser: (state,action)=>{
            const user =action.payload
            return state = user
        },
        changeEmail: (state,action)=>{
            const email =action.payload
            return state.email = email
        }
    }
})


export const {addUser, changeEmail} = userSlice.actions
export default userSlice.reducer