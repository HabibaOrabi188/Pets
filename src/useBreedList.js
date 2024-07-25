// import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
// import fetchBreedList from "./fetchBreedList";
import { useGetBreedsQuery, useGetPetQuery } from "./PetApiService";



export default function useBreedList(animal){

    // const result=useQuery(["breeds",animal],fetchBreedList)

    const {data:breeds}=useGetBreedsQuery(animal,{skip:!animal})
    // return [result?.data?.breeds ??[]]

    return [breeds??[]]
    
}



/*

const [breedList,setbreedList]=useState([])

    const [isLoading,setLoading]=useState(false)

    const [error,setError]=useState(null)

    useEffect(()=>{
        // if(animal)
        // {
        //     requestBreedList()
        // }
        // else{
        //     setbreedList([])
        // }


        if(!animal){
            setbreedList([])
        }
        else if(localCache[animal]){
            setbreedList

        }
        else{
            requestBreedList()
        }
       
    },[animal])

    async function requestBreedList(){
       try{
        setError(null)
        setLoading(true)
        const res=await fetch(
            `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
        )
        const json=await res.json()
        localCache[animal]=json.breeds || []
        setbreedList(localCache[animal])
       }catch(e){
        setError(e)
       }
       finally{
        setLoading(false)
       }
    }
    return [breedList,isLoading,error]


*/