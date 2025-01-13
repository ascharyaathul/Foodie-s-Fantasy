import React, { useEffect, useState } from "react";
import "./SingleView";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Single.css";

export default function SingleView() {
  const { id } = useParams();
  const [items, setitems] = useState({});
  console.log(items.strIngredient1);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        console.log(response.data.meals[0]);
        setitems(response.data.meals[0]);
      });
  }, [id]);

  return (
    <>
      <section className="Sec1">
        <div
          className="row"
          style={{
            backgroundColor: "black",
            width: "100vw",
            height: "210vh",
            color: "green",
            margin: "20px",
          }}
        >
          <h1
            style={{
              marginTop: "20px",
              fontFamily: "serif",
              marginLeft: "500px",
            }}
          >
            MEALS
          </h1>
          {/* <div style={{marginLeft:"20px",marginRight:"20px",backgroundColor:"purple"}}> */}

          <h1 style={{ fontFamily: "revert", marginTop: "5px" }}>
            Instructions:{" "}
          </h1>
          {items.strInstructions}
          <p style={{ textDecorationLine: "underline" }}>Increadients:</p>
          <div className="col-lg-3">
            {items.strIngredient1}
            <img
              src={`https://www.themealdb.com/images/ingredients/${items.strIngredient1}.png`}
              height={"100px"}
              alt=""
              className="Image"
            />
          </div>
          <div className="col-lg-3">
            {items.strIngredient2}
            <img
              src={`https://www.themealdb.com/images/ingredients/${items.strIngredient2}.png`}
              height={"100px"}
              alt=""
              className="Image"
            />
          </div>
          <div className="col-lg-3">
            {items.strIngredient3}
            <img
              src={`https://www.themealdb.com/images/ingredients/${items.strIngredient3}.png`}
              height={"100px"}
              alt=""
              className="Image"
            />
          </div>
          <div className="col-lg-3">
            {" "}
            {items.strIngredient4}
            <img
              src={`https://www.themealdb.com/images/ingredients/${items.strIngredient4}.png`}
              height={"100px"}
              alt=""
              className="Image"
            />
          </div>
          <div className="col-lg-3">
            {" "}
            {items.strIngredient5}
            <img
              src={`https://www.themealdb.com/images/ingredients/${items.strIngredient5}.png`}
              height={"100px"}
              alt=""
              className="Image"
            />
          </div>
          <div className="col-lg-3">
            {" "}
            {items.strIngredient6}
            <img
              src={`https://www.themealdb.com/images/ingredients/${items.strIngredient6}.png`}
              height={"100px"}
              alt=""
              className="Image"
            />
          </div>
          <div className="col-lg-3">
            {" "}
            {items.strIngredient7}
            <img
              src={`https://www.themealdb.com/images/ingredients/${items.strIngredient7}.png`}
              height={"100px"}
              alt=""
              className="Image"
            />
          </div>
          <div className="col-lg-3">
            {" "}
            {items.strIngredient8}
            <img
              src={`https://www.themealdb.com/images/ingredients/${items.strIngredient8}.png`}
              height={"100px"}
              alt=""
              className="Image"
            />
          </div>
          <div className="col-lg-3">
            {" "}
            {items.strIngredient9}
            <img
              src={`https://www.themealdb.com/images/ingredients/${items.strIngredient9}.png`}
              height={"100px"}
              alt=""
              className="Image"
            />
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}
