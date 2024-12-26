import React, { useEffect, useState } from 'react'
import "./SingleView";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function SingleView() {
const {id}=useParams()
const [items, setitems]=useState({});
console.log(items.strIngredient1);


useEffect(()=>{

axios
.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
.then((response)=>{

console.log(response.data.meals[0])
setitems(response.data.meals[0])




});

},[id]);










  return (
   <>
<section className='Sec1'>
    <div style={{backgroundColor:"yellow" , width:"100vw",height:"100vh"}}>
    <h1 style={{marginTop:"20px",fontFamily:"serif",marginLeft:"500px"}}>MEALS</h1>  
    <div>
   
   <p>Instructions: {items.strInstructions}</p>
   <p>Increadients: {items.strIngredient1}</p>
   
   </div>  
    </div>
    

</section>
   
   </>
  )
}
