
import {createSlice} from "@reduxjs/toolkit"



interface Modal{
    isOpen: boolean,
    isConfirm: boolean,
    isShow: boolean
}


const initialState:Modal={
    isOpen: false,
    isConfirm: false,
    isShow: false
}

export const counterSlice =createSlice({
    name: "modal",
    initialState,
    reducers:{
        openCheckOut(state){
            state.isOpen=true
        },

        closeCheckOut(state){
            state.isOpen=false
        },
        openConfirm(state){
            state.isConfirm=true
        },
        closeConfirm(state){
            state.isConfirm=false
        },
        openShow(state){
            state.isShow=true
        },
        closeShow(state){
            state.isShow=false
        }
       }
    }
    
)



export const { openCheckOut, closeCheckOut,  openConfirm, closeConfirm, openShow, closeShow} = counterSlice.actions;
export default counterSlice.reducer