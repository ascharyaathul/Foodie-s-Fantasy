import React from 'react'

export default function Blog() {
  return (
    <div
          class="card-group"
         
        >
          <div className="blog-card">
            <img
              src="https://assets.nicepagecdn.com/11a8ddce/4267640/images/pexels-photo-3662126.jpeg"
              class="card-img-top"
              alt=""
            ></img>
            <div class="card-body text-center" style={{width:'220px'}}>
              <h5 class="card-title" >
                POST 6 HEADLINE
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </div>
            <div className="blog-button">
              Read more
            </div>
          </div>
        </div>
  )
}
