import React from 'react'
import 'react-slideshow-image/dist/styles.css'

const titleSlide = {
    fontWeight: "600",
    fontSize: "1.5rem",
}

const SlideHome = () => {
    return (
        <div className="slide-container">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    {/* {slideImages.map((slideImages, index) => (
                <div class="carousel-item active" key={}>
                  <img src={slideImages.url} class="d-block w-100" alt={slideImages.caption} />
                </div>
              ))} */}
                    <div class="carousel-item active">
                        <img src="images/slidehome/slide_1.jpg" class="slide-image d-block w-100" alt="Slide 1" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={titleSlide}>03 &ensp; | &ensp; 02</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="images/slidehome/slide_2.jpg" class="slide-image d-block w-100" alt="Slide 2" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={titleSlide}>01 &ensp; | &ensp; 03</h5>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="images/slidehome/slide_3.jpg" class="slide-image d-block w-100" alt="Slide 3" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={titleSlide}>02 &ensp; | &ensp; 01</h5>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default SlideHome