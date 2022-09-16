import React from "react";
import { Carousel } from "react-bootstrap";
import WomenWithVaccine from "../../assets/images/corousel/thumb (1).jpg";
import thumb from "../../assets/images/corousel/thumb.jpg";
import Info from "../../assets/images/corousel/vaccine.jpg";

const Slider = () => {
  return (
    <Carousel style={{ height: "550px", marginBottom: "30px" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={thumb}
          alt="First slide"
          style={{ height: "550px", objectFit: "cover" }}
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Info}
          alt="Second slide"
          style={{
            height: "550px",
            objectFit: "cover",
          }}
        />
        {/* 
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={WomenWithVaccine}
          alt="Third slide"
          style={{ height: "550px", objectFit: "cover" }}
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
