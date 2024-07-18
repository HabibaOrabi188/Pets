import { useEffect, useState } from "react";

import {Pet} from  './Pet'

import Result from "./Result";
import useBreedList from "./useBreedList";


const animals=['cat','dog','rabbit','reptile']
const Search = () => {
  // const location = 'tanta';
  const [location,setLocation]=useState('')
  const [animal,setanimal]=useState('')

  const [breed,setbreed]=useState('')
  const [pets,setpets]=useState([])
  const [breeds,isLoding,error]=useBreedList(animal)


  useEffect(()=>{
    requetPets()
  },[breed])


  async function requetPets(){
    const res=await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
    )
    const json=await res.json()
    setpets(json.pets)
  }

  return (

    
    <div className="search-params">
      <form onSubmit={(e)=>{
        e.preventDefault()
        requetPets()
      }}>
        <label htmlFor="location">
          location
          <input id="location" value={location} placeholder="location"
          onChange={(e)=>{
            setLocation(e.target.value)
          }}
          />
        </label>

        <label htmlFor="animal">
          Animal

          <select
          id='animal'
          value={animal}
          onChange={(e)=>{
            setanimal(e.target.value)
          }}
          >

            {
              animals.map((item,index)=>(
                <option value={item} key={index}>
                  {item}
                </option>
              ))
            }

           
            
          </select>

        </label>

        <label htmlFor="breed">
          Breed

          <select
          id='breed'
          value={breed}
          onChange={(e)=>{
            setbreed(e.target.value)
          }}
          >

            {
              breeds.map((item,index)=>(
                <option value={item} key={index}>
                  {item}
                </option>
              ))
            }

       </select>

        </label>


        <button>submit</button>
      </form>

      <Result pets={pets}/>
    </div>
  );
};

export default Search;
