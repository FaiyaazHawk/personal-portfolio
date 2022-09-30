import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Foot from "../Foot";



function About() {
    return (
        <main>
            <h1>About Me</h1>
            <p>Lorem ipsum babum dural talk about how i like programming and small aside about in my spare time 
                I like building Gundam model
            </p>
            <h3>Here are the technologies I know</h3>
            <section>
                <ul>
                    <li>Name + Emoji</li>
                    <li>Name + Emoji</li>
                    <li>Name + Emoji</li>
                    <li>Name + Emoji</li>
                    <li>Name + Emoji</li>
                    <li>Name + Emoji</li>
                    <li>Name + Emoji</li>
                </ul>
            </section>
            
            <h5> Heres some of the gundam models I made</h5> 
            <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Foot/>

        </main>
    )
}

export default About;