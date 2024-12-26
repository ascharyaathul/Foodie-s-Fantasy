import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'

export default function Incredients() {

const[items, setitems]= useState({});
console.log(items);


useEffect(()=>{
axios
.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list",)
.then((response)=>{
  console.log(response);
  setitems(response.data.meals[0]);

  



})

},[]);












  return (
    <div style={{width:"100vw",height:"100vh",backgroundColor:"green"}}>
      <h1 style={{fontFamily:"revert",color:"white"}}>Incredients:</h1>
      {items.
idIngredient
}
{items.strDescription
}
{items.strIngredient}
    </div>
  )
}










 