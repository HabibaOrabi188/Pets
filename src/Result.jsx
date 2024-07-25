import React from 'react'
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
        location={`${item.city},${item.state}`}
        images={item.images}

        />

       
      ))}
      </div>
      )
}