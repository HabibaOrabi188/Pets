
import {Pet} from  './Pet'

export default function Result({pets}){
  console.log()
    return ( 
        <div className="search">
        
       { pets.length==0?
       <h1>No pets found</h1>
       :pets.map(item=>(
       
         <Pet 
        name={item.name}
        animal={item.animal}
        breed={item.breed}
        id={item.id}
        images={item.images}

        />

       
      ))}
      </div>
      )
}