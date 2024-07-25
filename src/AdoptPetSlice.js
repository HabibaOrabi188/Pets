import { createSlice } from "@reduxjs/toolkit";


const AdoptPetSlice=createSlice({
    name:"AdoptedPet",
    initialState:{
        value:null
    },
    reducers:{
        adopt:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const  {adopt} =AdoptPetSlice.actions

export default AdoptPetSlice.reducer