import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import axios from 'axios'

export default function NewMeals() {
    const [items, setitems] = useState({});
    console.log(items);
    const[Next,setNext]= useState(true);
    console.log(Next);
    
    
    
    
    

    useEffect(()=>{
        axios 
        .get("https://www.themealdb.com/api/json/v1/1/random.php",)
        .then((response)=>{
            console.log(response);
            setitems(response.data.meals[0]);
            

        })

    },[Next]);
    const NextReciepy = ()=>{
      axios 
      .get("https://www.themealdb.com/api/json/v1/1/random.php",)
      .then((response)=>{
          console.log(response);
          setitems(response.data.meals[0]);
          

      })
      
      
      


    };



  
    







  return (
    <>
    <NavBar/>
    <div class="card-group">
          <div className="blog-card  col-lg-6" style={{marginLeft:"250px",height:"70vw"}}>
            <p style={{marginLeft:"-200px"}}>Categories:</p>
            <div style={{position:"absolute",marginLeft:"50px"}}>
            {items.strCategory}
            </div>
            <input type="button" style={{marginTop:"20px",marginRight:"500px",backgroundColor:"black",color:"white"}}onClick={NextReciepy} value="Next"  />
           
            <img
              src={items.strMealThumb}
              class="card-img-top"
              alt=""
            ></img>
             <a href="/Incredients">Description</a>

            <div class="card-body text-center" style={{ width: "220px" }}>
              <h5 class="card-title">{items.strMeal}</h5>
             
              {items.strArea}
              {items.idMeal}



              
            </div>
            
            <a href={`/SingleView/${items.idMeal}`}  className="blog-button">Readmore</a>
           
          </div>
          </div>
    
    </>
  );
}
