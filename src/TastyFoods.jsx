import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function TastyFoods() {

const[Name, setName]= useState({});
console.log(Name);


useEffect(()=>{
axios
.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata",)
.then((response)=>{
console.log(response);
setName(response.data.meals[0])



})









},[]);








  return (
    <>
    <div style={{width:"100vw",height:"100vh",backgroundColor:"yellow"}}>
        <div style={{}}>
        
        {Name.idMeal}
        <br />
        {Name.strMeal}
        <br />
        {Name.strCategory}
        <br />
        {Name.strArea}
        <br />
        {Name.strMealThumb
        }
        <br />
        {Name.strTags
        }
        </div>



    </div>
    
    
    
    
    
    
    
    
    </>
  )
}
