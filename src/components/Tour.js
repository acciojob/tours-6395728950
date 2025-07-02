import React, { useState } from 'react'

const Tour = (props) => {
    const[show,setShow] = useState(false);
    const{id,image,info,name,price,handleDelete} = props;
    

     
    
  return (
    <div>
      <ul>
     {
          
            <li>
                <h2>{name}</h2>
                <img src={image}></img>
                <p>{show?info:`${info.substr(0,200)}...`}
                    <button onClick={()=>setShow(!show)}>{!show ?"Show more":"See less"}</button>
                </p>
                <h4>{price}</h4>
                <button onClick={()=>handleDelete(id)}>Remove</button>
            </li>
          
     }
      </ul>
    </div>
  )
}

export default Tour