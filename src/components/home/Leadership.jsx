
import React, { useState, useEffect, Profiler } from "react";
import Carousel from "react-bootstrap/Carousel";
const Leadership = ({ heading, message, img, imageSize }) => {
  return (
    <div
      id="leadership"
      className="jumbotron jumbotron-fluid m-0"
      style={{ backgroundColor: "aliceblue" }}
    >
      <div className="container container-fluid">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <div className="row">
          <div className="d-block mx-auto">
            <p className="lead">{message.split('\n').map(str => <p>{str}</p>)}</p>
          </div>
          <div className="col align-self-center">
            <Carousel>
              {img.map((value, index) => {
                return (
                  <Carousel.Item>
                    <img
                      className="col"
                      src={value.img}
                      width={1280}
                      height={720}
                    />
                    <Carousel.Caption>
                      <h3>{value.label}</h3>
                      <p>
                        <p class="text-white bg-dark">{value.paragraph}</p>
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
