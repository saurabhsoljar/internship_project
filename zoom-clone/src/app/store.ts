import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/AuthSlices";



export const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
    },
});


export type RootSttate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;