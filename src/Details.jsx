import { useQuery } from '@tanstack/react-query';
import {useParams} from 'react-router-dom';
import fetchPetDetails from './fetchPetDetails';

const Details = () => {
  const {id} = useParams();
  const result = useQuery(["details",id],fetchPetDetails)
  console.log("$$$$$$$$$$$", result.isLoading)
  if(result.isLoading)

    {
        return(
            <div className='loading-pane'>
            <h1 className='loader'>load</h1>
            </div> 
            )
    }




console.log("result:::",result.data)
const pet=result.data.pets[0]

return (
<div className='details'>

    <div>
        <h1>{pet.name}</h1>
        <h2>{pet.animal}-{pet.breed}</h2>
        <button>Adope {pet.name}</button>
        {/* <p>{pet.description}</p> */}
    </div>

</div>

)
};
export default Details;
