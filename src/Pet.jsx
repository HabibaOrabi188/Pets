import { Link } from "react-router-dom";

export const Pet = ({name,animal,breed,images,id}) => {
  // return React.createElement('div', {}, [
  //   React.createElement('h2', {}, props.name),
  //   React.createElement('h2', {}, props.animal),
  // ]);

  let animalImage="http://pets-images.dev-apis.com/pets/none.jpg" 

  if(images.length){
    animalImage=images[0]
  }
  return (
    
  
<Link to={`/details/${id}`} className="pet">

<div className="image-container">
<img src={animalImage} />
</div>

<div className="info"> 
<h2>{name}</h2>
<h2>{animal}</h2>
<h2>{breed}</h2>
</div>



</Link>
    
  )
};

