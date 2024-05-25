import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../../../assets/banner1.jpeg"
import banner2 from "../../../../assets/banner2.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';

function Mainbanner() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Mainbanner;
