import React from 'react'
import Tour from './Tour'

const Tours = (props) => {
    const{data,setTourData}  = props;
    const handleDelete = (id)=>{
        const val = data.filter((item)=>item.id!==id);
        setTourData(val);
     }
  return (
    <div>
    {
      data.map((item)=>{
        const {id,image,info,name,price} = item;
       return  (  <Tour
         id={id}
         image={image}
         info={info}
         name={name}
         price={price}
         handleDelete={handleDelete}
         />
      )
})
    } 
    </div>
  )
}

export default Tours