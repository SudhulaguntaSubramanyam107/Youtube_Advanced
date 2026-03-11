import { createSlice } from "@reduxjs/toolkit"
const appSlice = createSlice({
    name : "app",
    initialState : {
        isOpenMenu : true
    },
    reducers : {
        toggleMenu : (state)=>{
        state.isOpenMenu = !state.isOpenMenu
    }   ,
        closeMenu : (state)=>{
            state.isOpenMenu = false
        }
    }

})
export const {toggleMenu, closeMenu} = appSlice.actions
export default appSlice.reducer