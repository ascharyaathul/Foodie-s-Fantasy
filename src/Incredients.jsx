import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'

export default function Incredients() {

const[items, setitems]= useState([]);
console.log(items);


useEffect(()=>{
axios
.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
.then((response)=>{
  console.log(response);
  setitems(response.data.meals);

  



})
},[]);


return (
    <div style={{width:"100vw",height:"200vh",padding:"20px"}}>
      
      
     
{items.map((Value,Index)=>(
  <div style={{padding:'20px',margin:"20px",color:"white",border:'1px solid black',backgroundColor:"green"}}>
<h1 style={{fontFamily:"revert"}}>Description</h1>
{Value.strDescription}
<h1 style={{fontFamily:"revert",color:"white"}}>Incredients:</h1>
{Value.strIngredient},
{Value.idIngredient}
</div>

))}

    </div>
   ) };










 