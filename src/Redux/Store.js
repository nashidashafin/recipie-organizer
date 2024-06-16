import { configureStore } from "@reduxjs/toolkit";
import recipieSlice from "./recipieSlice";
import addRecipieSlice from "./addRecipieSlice";
import deleteRecipieSlice from "./deleteRecipieSlice";
import editRecipieSlice from "./editRecipieSlice";


export const store=configureStore({
    reducer:{
        //list of reducers
        recipie:recipieSlice,
        add:addRecipieSlice,
        delete:deleteRecipieSlice,
        edit:editRecipieSlice
    }
})