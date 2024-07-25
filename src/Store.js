import { configureStore } from "@reduxjs/toolkit";
import adoptedPet from './AdoptPetSlice'
import { petApi } from "./PetApiService";

const Store =configureStore({
    reducer:{
        adoptedPet,
        petApi:petApi.reducer 
    },
    middleware:getDefaultMiddleWare=>
        getDefaultMiddleWare().concat(petApi.middleware)
})

export default Store;