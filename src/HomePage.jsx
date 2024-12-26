import React from "react";
import "./HomePage.css";
import NavBar from "./components/NavBar";
import MenuCard from "./components/MenuCard";
import Contact from "./components/Contact";
import Banner from "./components/Banner";
import Blog from "./components/Blog";

export default function App() {
  return (
    <>
      <section className="sec1">
        <NavBar />
        <Banner />
      </section>

      <section className="sec2">
        <div
          style={{
            height: "100vh",
            width: "100vw",
            marginTop: "77px",
            padding: "15px",
            textAlign: "center",
          }}
        >
          <div style={{ width: "px", height: "60px", marginRight: "40px" }}>
            <h1 style={{ fontFamily: "-moz-initial", fontWeight: "bolder" }}>
              View Our Menu
            </h1>
          </div>

          <div className="card-group" style={{ gap: "50px" }}>
            <MenuCard />
          </div>
        </div>
        <h5 style={{ marginLeft: "300px" }}>
          Sample text. Click to select the Text Element. Image from{" "}
          <span style={{ color: "green" }}>Freepik </span>
        </h5>
      </section>

      <section className="sec3">
        <div
          style={{
            width: "100vw",
            height: "70vh",
            background: "linear-gradient(to bottom right, #a8e063, #56ab2f)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Contact />
        </div>
      </section>

      <section className="sec4">
        <div
          style={{
            marginLeft: "20px",

            backgroundImage: `url("https://assets.nicepagecdn.com/11a8ddce/4267640/images/fresh-salad-with-turkey-eggs-vegetables.jpg")`,
            borderRadius: "30px",
            marginTop: "50px",
            height: "526px",
          }}
        >
          <div
            style={{ marginLeft: "50px", color: "white", position: "absolute" }}
          >
            <h1 className="restaurent">our restaurant</h1>
            <h1>A culinary adventure for all the senses</h1>

            <h5 style={{ color: "white" }}>
              Sample text. Click to select the Text Element. Image from{" "}
              <span style={{ color: "red" }}>Freepik </span>
            </h5>
            <button type="button" class="btn btn-outline-warning">
              READMORE
            </button>
          </div>
        </div>
      </section>

      <section
        className="sec5"
        style={{ marginTop: "20px", marginLeft: "20px" }}
      >
        <Blog />
        <p style={{ fontFamily: "sans-serif", marginLeft: "300px" }}>
          Sample text. Click to select the Text Element. Image from {""}
          <span style={{ color: "red" }}>FREEPIK</span>
        </p>
      </section>

      <section className="sec6">
        <div>
          <div
            style={{
              marginLeft: "20px",

              backgroundImage: `url("https://assets.nicepagecdn.com/11a8ddce/4267640/images/juicy-steak-medium-rare-beef-with-spices-grilled-vegetables.jpg")`,
              borderRadius: "30px",
              marginTop: "50px",
              height: "526px",
            }}
          >
            <div
              style={{
                marginLeft: "50px",
                color: "white",
                position: "absolute",
              }}
            >
              <h1 className="restaurent" style={{ fontFamily: "sans-serif" }}>
                Our Restaurant
              </h1>
              <h1 style={{ fontFamily: "sans-serif" }}>
                The Magic Of The Kitchen
              </h1>

              <h5 style={{ color: "white", fontFamily: "sans-serif" }}>
                Sample Text. Click To Select The Text Element. Image From{" "}
                <span style={{ color: "red" }}>FREEPIK </span>
              </h5>
              <button type="button" class="btn btn-outline-warning">
                READMORE
              </button>
            </div>
          </div>
        </div>
      </section>

      
      <section className="sec7" >
      <div
          style={{
            marginTop:"40PX",
            width: "100vw",
            height: "90vh",
          
            background:"linear-gradient(to bottom right,#f1ae0e,#f1ae0e)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
         <div
    style={{
      backgroundColor: "white",
      width: "100%",
      maxWidth: "800px",
      height:"300px",
      padding: "40px",
      borderRadius: "20px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
    }}
  >
    <h1 style={{ color: "black", fontSize: "2.5rem", margin: "0 0 20px" }}>
      Keep Up to Date With Us
    </h1>
    <h5 style={{ color: "#555", margin: "0 0 30px" }}>
    Sample text. Click to select the Text Element.
    </h5>
    
  <div class="container-fluid">
    
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Enter a valid E mail Id"input/>
      <button class="btn btn-outline-success" type="submit">SUBMIT</button>
    </form>
  </div>

  </div>
        </div>

      </section>
<section className="sec8">

          <div
            style={{
              marginLeft: "20px",

              backgroundImage: `url("https://assets.nicepagecdn.com/11a8ddce/4267640/images/dietary-menu-healthy-vegan-salad-vegetables-broccoli-mushrooms-spinach-quinoa-bowl-flat-lay-top-view.jpg")`,
              borderRadius: "30px",
              marginTop: "50px",
              height: "526px",
            }}
          >
            <div
              style={{
                marginLeft: "50px",
                color: "white",
                position: "absolute",
              }}
            >
              <h1 className="restaurent" style={{ fontFamily: "sans-serif" }}>
                Our Restaurant
              </h1>
              <h1 style={{ fontFamily: "sans-serif" }}>
              A new way to experience food
              </h1>

              <h5 style={{ color: "white", fontFamily: "sans-serif" }}>
                Sample Text. Click To Select The Text Element. Image From{" "}
                <span style={{ color: "red" }}>FREEPIK </span>
              </h5>
              <button type="button" class="btn btn-outline-warning">
                READMORE
              </button>
            </div>
          </div>
        

</section>

<section className="sec9">
<div
            style={{
              marginLeft: "20px",

              backgroundColor:"white" ,
              borderRadius: "30px",
              marginTop: "50px",
              height: "526px",
            }}

          >
           <div className="Circle" style={{position:"absolute"}}>
           <h1 className="h2" style={{marginTop:"10px"}}>40%</h1>
           <h6 className="h6">business lunch</h6>
           
           <h5 style={{marginTop:"70px",fontFamily:"sans-serif"}}>Image from {""}
            <span style={{color:"green",}}>FREEPIK</span>
            </h5>
            <div style={{width:"20vw"}}>
            <h1>Our Contact</h1>
            <button type="button" class="btn btn-outline-warning">
              READMORE
            </button>
            </div>
           </div>
           <div className="BannerIcon">
            <div className="Msg" style={{position:"absolute",}}>
           
              <i class="fas fa-envelope" style={{marginLeft:"17px",marginTop:"20px"}}>

              </i>
              </div>
            <h3 style={{fontFamily:"sans-serif"}}> Chart to us</h3>
            <p style={{fontFamily:"sans-serif",fontSize:"20px"}}>Our friendly team is here to help.</p>
            <p style={{color:"bisque",fontSize:"25px"}}>hi@ourcompany.com</p>
            <div className="Location" style={{position:"absolute"}}>
            <span class="material-icons" style={{marginLeft:"12px",marginTop:"13px"}}>location_on</span>
            </div>
           <h3 style={{fontFamily:"sans-serif"}}> Office</h3>
           <p style={{fontFamily:"sans-serif"}}>Come say hello at our office HQ.</p>
            <p style={{fontFamily:"sans-serif",fontSize:"20px"}}>121Rokstreet,21Avenue</p>
            <p style={{fontFamily:"sans-serif"}}>Newyork NY92-00-345</p>
            <div className="Call" style={{position:"absolute"}}>
            <i class="fas fa-phone" style={{marginLeft:"13px",marginTop:"14px"}}></i>
            </div>
            <h3 style={{fontFamily:"sans-serif"}}>  Phone</h3>
            <p style={{fontFamily:"sans-serif"}}>Mon-Fri from 8am to 5am</p>
            <p style={{fontFamily:"sans-serif"}}> <span style={{color:"bisque"}}>+123-574-000 </span></p>

          </div>
              
          </div>
        </section>

         
        <section className="Sec10" style={{marginTop:"20px"}}>
          <div style={{width:"100vw",height:"50vh",backgroundColor:"black"}}>
            <div style={{position:"absolute",marginLeft:"500px",marginTop:"50px",color:"white"}}>
            <p>Sample text. Click to select the Text Element.</p>
            </div>
            <div style={{position:"absolute",marginLeft:"500px",marginTop:"200px",color:"white"}}>
            <p>This site was created with the Nicepage</p>
            </div>
          </div>

        </section>


    </>
  );
}
