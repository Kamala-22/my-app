import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slides.css';


const AutoCarousel = () => {
  return (
    <Carousel interval={3000} pause={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://img.ltwebstatic.com/images3_ach/2020/10/26/16036827801eee956776638e978103443b363cefe3.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First Slide</h3>
          <p>This is the first slide caption.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.freekaamaal.com/store_desc_images/1518092191.jpg"
          alt="Second slide"
        />
        {/* <Carousel.Caption>nk6vbw59pZKHtDh1WnqYpKnQxIokimSKLIoOSJIo71
          <h3>Second Slide</h3>
          <p>This is the second slide caption.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mendeserve.com/cdn/shop/files/MD_Web_Banner_1923.jpg?v=1704174572"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>This is the third slide caption.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default AutoCarousel;
