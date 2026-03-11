import { createSlice } from "@reduxjs/toolkit";

const themeslice = createSlice({
    name : "theme",
    initialState : {
        isDark : false
    },
    reducers : {
        isThemeDark : (state)=>{
            state.isDark = !state.isDark
        }
    }

})
export const {isThemeDark} = themeslice.actions
export default themeslice.reducer