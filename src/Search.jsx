import {useContext, useEffect, useState} from 'react';

import {Pet} from './Pet';

import Result from './Result';
import useBreedList from './useBreedList';
import {useQuery} from '@tanstack/react-query';
import fetchSearch from './fetchSearch';
import AdoptedPetContext from './AdoptedPetContext';
import {useSelector} from 'react-redux';

const animals = ['cat', 'dog', 'rabbit', 'reptile'];
const Search = () => {
  // const location = 'tanta';
  const [location, setLocation] = useState('');
  const [animal, setanimal] = useState('');

  const [breed, setbreed] = useState('');
  // const [pets, setpets] = useState([]);
  const [breeds] = useBreedList(animal);

  const [formState, setformState] = useState({
    location: '',
    animal: '',
    breed: '',
  });

  // const [adoptedPet]=useContext(AdoptedPetContext)

  // useEffect(()=>{
  //   requetPets()
  // },[breed])

  // async function requetPets(){
  //   const res=await fetch(
  //     `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
  //   )
  //   const json=await res.json()
  //   setpets(json.pets)
  // }

  const result = useQuery(['search', formState], fetchSearch);

  const adoptedPet = useSelector((state) => state.adoptedPet.value);

  const pets = result?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // requetPets();
          const formData = new FormData(e.target);
          setformState({
            location: formData.get('location'),
            animal: formData.get('animal'),
            breed: formData.get('breed'),
          });
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} />
          </div>
        ) : null}
        <label htmlFor="location">
          location
          <input
            id="location"
            // value={location}
            placeholder="location"
            // onChange={(e) => {
            //   setLocation(e.target.value);
            // }}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            name="animal"
            onChange={(e) => {
              setanimal(e.target.value);
            }}
          >
            {animals.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            // value={breed}
            name="breed"
            // onChange={(e) => {
            //   setbreed(e.target.value);
            // }}
          >
            {breeds.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <button>submit</button>
      </form>

      <Result pets={pets} />
    </div>
  );
};

export default Search;

/*










*/
