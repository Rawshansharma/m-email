import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        open:false,
        user : null,
        emails:[],
        emailDetails:null,
        sarchText:''
    },
    reducers:{
        //actions
        setOpen:(state , action) => {
             state.open = action.payload;
        },
        setUserAuth:(state , action) => {
            state.user = action.payload;
        },
        setEmails:(state,action) => {
            state.emails = action.payload;
        },
        setEmailsDetails:(state,action) => {
            state.emailDetails = action.payload;
        },
        setSarchText:(state,action) => {
            state.sarchText = action.payload;
        }

    }
});
export const {setOpen , setUserAuth , setEmails , setEmailsDetails , setSarchText} = appSlice.actions;
export default appSlice.reducer;