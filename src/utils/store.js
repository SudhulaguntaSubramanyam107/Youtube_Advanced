import { configureStore } from "@reduxjs/toolkit"
import appSlice from "./appSlice"
import themeslice from "./themeslice"
import chatSlice from "./chatSlice"
const store = configureStore({
    reducer :{
        app:appSlice,
        theme : themeslice,
        chat : chatSlice
    }

})

export default store