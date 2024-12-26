import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import axios from "axios";
export default function Category() {
  const [items, setitems] = useState([]);
  console.log(items);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        console.log(response);
        setitems(response.data.categories);
      });
  }, []);
  return (
    <>
      <section className="sec1" style={{}}>
        <NavBar />
        <div>
          <p style={{ fontFamily: "sans-serif", fontSize: "50px", color: "" }}>
            Categories
          </p>
        </div>

        <div class="card-group" style={{ justifyContent: "center" }}>
          {items.map((value, index) => (
            <div
              className="blog-card  col-lg-"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              <img
                src={value.strCategoryThumb}
                class="card-img-top"
                alt=""
              ></img>
              <div class="card-body text-center" style={{ width: "220px" }}>
                <h5 class="card-title">{value.strCategory}</h5>
                <p
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {value.strCategoryDescription}
                </p>
              </div>
              <div className="blog-button">Read more</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
