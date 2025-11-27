

import counterReducer  from "./features/counter/counterSlice";
import { apiSlice } from "./features/api/apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners} from '@reduxjs/toolkit/query/react'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer

    },
      
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
   
})



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)