import React, { useContext, useState } from 'react';
import {useQuery} from '@tanstack/react-query';
import {useNavigate, useParams} from 'react-router-dom';
import fetchPetDetails from './fetchPetDetails';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import AdoptedPetContext from './AdoptedPetContext';

import { adopt } from './AdoptPetSlice';
import { useDispatch } from 'react-redux';
import Modal from './Modal';

const Details = () => {
  const {id} = useParams();
  const result = useQuery(['details', id], fetchPetDetails);
  // const [AdoptedPet,setAdoptedPet]=useContext(AdoptedPetContext)
  // console.log(AdoptedPet)

  const dispatch=useDispatch()

  const [showModal,setshowModal]=useState(false)

  const navigate = useNavigate()

  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h1 className="loader">load</h1>
      </div>
    );
  }

  // console.log("result:::",result.data)

  const pet = result.data.pets[0];

  // throw new Error();

  return (
    <div className="details">
      <div>
        <Carousel images={pet.images} />
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal}-{pet.breed}
        </h2>
        <button 
        onClick={()=>{
          // dispatch(adopt(pet))
          // navigate("/")
          setshowModal(true)
        }}
        >Adope {pet.name}</button>
        <p>{pet.description}</p>
        {showModal?
        <Modal>
          <div >
          <h2>would you like to adopt {pet.name}??</h2>
          <div className='buttons'>
          <button
          onClick={()=>{
            dispatch(adopt(pet))
            navigate("/")
          }}
          >
            Yes
          </button>

          <button
          onClick={()=>{
            setshowModal(false)
          }}
          >
            No
          </button>
          </div>
          </div>
        </Modal>
      :
      null  
      }
      </div>
    </div>
  );
};

const DetailsErrorboundary = () => (
  <ErrorBoundary>
    <Details />
  </ErrorBoundary>
);

export default DetailsErrorboundary;

// export default Details;
