import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    status:"",
    error:"",
    user:{
        id: "",
        name: "",
        email: "",
        picture: "",
        status:"",
        token:"",
    },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state)=>{
           state.error="";
           state.status="";
           state.user={
              id: "",
              name: "",
              email: "",
              picture: "",
              status:"",
              token:"",
           } 
        },


    }
})

export const {logout} = userSlice.actions;
export default userSlice.reducer;
